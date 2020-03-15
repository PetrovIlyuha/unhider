import React, { useContext, useReducer } from 'react';
import Context from './state_manager/context';
import reducer from './state_manager/reducer';
import ProtectedRoute from './components/ProtectedRoute';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import App from './pages/App';
import Splash from './pages/Splash';

import 'mapbox-gl/dist/mapbox-gl.css';

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <ProtectedRoute exact path="/" component={App} />
          <Route path="/login" component={Splash} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
