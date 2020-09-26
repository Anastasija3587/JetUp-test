// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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
      <h1 style={{ textAlign: 'center' }}>WELCOME!</h1>
      <Container
        maxWidth="sm"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button variant="outlined" color="primary">
          <Link to="/news">News</Link>
        </Button>
        {!isAuth && (
          <Button variant="outlined" color="secondary" onClick={logOut}>
            <Link to="/login">LOGIN</Link>
          </Button>
        )}
        {isAuth && (
          <Button variant="outlined" color="primary">
            <Link to="/profile">Profile</Link>
          </Button>
        )}
        {isAuth && (
          <Button variant="outlined" color="primary">
            <Link to="/weather">Weather</Link>
          </Button>
        )}
        {isAuth && (
          <Button variant="outlined" color="secondary" onClick={logOut}>
            LogOut
          </Button>
        )}
      </Container>
    </>
  );
};

export default Welcome;
