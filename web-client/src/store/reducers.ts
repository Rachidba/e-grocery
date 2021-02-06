import { combineReducers } from 'redux';
import { shoppingCartReducer } from './shoppingCart/reducers';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
