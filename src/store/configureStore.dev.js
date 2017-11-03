import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(browserHistory);

/**
 * Creates a pre-configured store
 */
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, router, logger)
    )
  );

  if (module.hot) {
    // enable webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
