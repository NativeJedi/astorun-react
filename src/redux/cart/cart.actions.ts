import { IToggleCartAction, TOGGLE_CART } from './cart.types';

export const toggleCartAction = (): IToggleCartAction => ({
  type: TOGGLE_CART,
});
