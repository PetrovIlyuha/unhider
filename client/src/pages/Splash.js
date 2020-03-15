import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../state_manager/context';

import Login from '../components/Auth/Login';

const Splash = () => {
  const { state } = useContext(Context);
  return state.isAuth ? <Redirect to="/" /> : <Login />;
};

export default Splash;
