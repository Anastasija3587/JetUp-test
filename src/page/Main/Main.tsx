// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/types';
import { logout } from '../../redux/info/actions';

const Welcome = (): JSX.Element => {
  const isAuth: boolean = useSelector((state: State) => state.info.isAuth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>WELCOME!</h1>
      {!isAuth && <Link to="/login">Login</Link>}
      <Link to="/news">News</Link>
      {isAuth && <Link to="/profile">Profile</Link>}
      {isAuth && <Link to="/weather">Weather</Link>}
      {isAuth && (
        <button type="button" onClick={logOut}>
          LogOut
        </button>
      )}
    </>
  );
};

export default Welcome;
