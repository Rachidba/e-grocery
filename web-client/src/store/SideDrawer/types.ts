export const OPEN_SIDE_DRAWER = 'OPEN_SIDE_DRAWER';
export const CLOSE_SIDE_DRAWER = 'CLOSE_SIDE_DRAWER';

export interface SideDrawerState {
  isOpen: boolean;
}

interface OpenSideDrawerAction {
  type: typeof OPEN_SIDE_DRAWER;
}

interface CloseSideDrawerAction {
  type: typeof CLOSE_SIDE_DRAWER;
}

export type SideDrawerTypes = OpenSideDrawerAction | CloseSideDrawerAction;
