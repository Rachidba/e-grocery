import {
  SideDrawerState,
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER,
  SideDrawerTypes,
} from './types';

const initialState: SideDrawerState = {
  isOpen: false,
};

export function sideDrawerReducer(
  state = initialState,
  action: SideDrawerTypes,
): SideDrawerState {
  switch (action.type) {
    case OPEN_SIDE_DRAWER:
      return { isOpen: true };
    case CLOSE_SIDE_DRAWER:
      return { isOpen: false };
    default:
      return state;
  }
}
