import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { rootReducer } from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function getDevMiddlewares(): StoreEnhancer | undefined {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return composeEnhancers(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
  );
}

function getPrdMiddleware(): StoreEnhancer | undefined {
  return applyMiddleware(thunk);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function configureStore() {
  const middlewares =
    process.env.NODE_ENV === 'production'
      ? getPrdMiddleware()
      : getDevMiddlewares();
  return createStore(rootReducer, middlewares);
}
