import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { RootState } from './rootState';

// tslint:disable-next-line
var process: { env: { NODE_ENV: string } };

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    thunk,
  ];
  // compose enhancers
  const enhancer = compose(
    applyMiddleware(...middlewares),
  );
  // create store
  return createStore<RootState>(
    rootReducer,
    initialState!,
    enhancer,
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
