// eslint-disable-next-line
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useSelector } from 'react-redux';
import routes from '../../routes/routes';
import { State } from '../../types/types';

const ProtectedRoute: React.FC<RouteProps> = props => {
  const isAuth = useSelector((state: State) => state.info.isAuth);

  return isAuth ? (
    <Route {...props} component={props.component} to={props.path} />
  ) : (
    <Redirect to={routes.LOGIN_PAGE.path} />
  );
};

export default ProtectedRoute;
