import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from '../createRoutes';

const Root = ({ store, history }) => (
  <Provider store={ store }>
    <Router history={ history } routes={ createRoutes(store) }></Router>
  </Provider>
);

export default Root;
