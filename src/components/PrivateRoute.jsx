import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';

const PrivateRoute = () => {
  // import from custom hook
  const { loggedIn, checkingStatus } = useAuthStatus();

  // if run checking process
  if (checkingStatus) {
    return <h3>Loading...</h3>;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
