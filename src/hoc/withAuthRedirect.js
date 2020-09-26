// eslint-disable-next-line
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const withAuthRedirect = BaseComponent => {
  const WithAuthRedirect = ({ props }) => {
    const isAuth = useSelector(state => state.info.isAuth);
    return isAuth ? <Redirect to="/main" /> : <BaseComponent {...props} />;
  };

  WithAuthRedirect.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  return WithAuthRedirect;
};

export default withAuthRedirect;
