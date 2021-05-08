import { combineReducers } from 'redux';
import { shoppingCartReducer } from './shoppingCart/reducer';
import { sideDrawerReducer } from './SideDrawer/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  sideDrawer: sideDrawerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
