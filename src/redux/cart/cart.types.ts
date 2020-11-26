export const TOGGLE_CART = 'TOGGLE_CART';

export interface ICartState {
  readonly isOpened: boolean;
}

export interface IToggleCartAction {
  type: string;
}

export type CartActionTypes = IToggleCartAction;
