import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { ICartState } from './cart.types';

const selectCart = (state: RootState) => state.cart;

export const selectCartIsOpened = createSelector(
  [selectCart],
  (cart: ICartState) => cart.isOpened
);
