// eslint-disable-next-line
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/index';
import routes from '../../routes/routes';
import { State } from '../../types/types';
import Loader from '../Loader/Loader';

const App = () => {
  const isLoading = useSelector((state: State) => state.info.isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Switch>
        <Route
          exact
          path={routes.MAIN_PAGE.path}
          component={routes.MAIN_PAGE.component}
        />
        <Route
          path={routes.LOGIN_PAGE.path}
          component={routes.LOGIN_PAGE.component}
        />
        <Route
          path={routes.NEWS_PAGE.path}
          component={routes.NEWS_PAGE.component}
        />
        <ProtectedRoute
          path={routes.WEATHER_PAGE.path}
          component={routes.WEATHER_PAGE.component}
        />
        <ProtectedRoute
          path={routes.PROFILE_PAGE.path}
          component={routes.PROFILE_PAGE.component}
        />
        <Redirect to={routes.MAIN_PAGE.path} />
      </Switch>
    </>
  );
};

export default App;
