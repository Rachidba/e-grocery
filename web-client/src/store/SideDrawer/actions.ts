import { OPEN_SIDE_DRAWER, CLOSE_SIDE_DRAWER, SideDrawerTypes } from './types';

export function openSideDrawer(): SideDrawerTypes {
  return { type: OPEN_SIDE_DRAWER };
}

export function closeSideDrawer(): SideDrawerTypes {
  return { type: CLOSE_SIDE_DRAWER };
}
