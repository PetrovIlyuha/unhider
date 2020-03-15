import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Context from '../state_manager/context';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { state } = useContext(Context);
  return (
    <Route
      {...props}
      render={props =>
        !state.isAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default ProtectedRoute;
