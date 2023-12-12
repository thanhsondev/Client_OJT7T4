import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../filters/isLogin';
import { Route } from "react-router-dom";


const PrivateRoute = ({
  ...rest
}) => {
  return (
    isLogin() ? <Route {...rest} /> : <Navigate to='/login' />
  );
};
export default PrivateRoute;