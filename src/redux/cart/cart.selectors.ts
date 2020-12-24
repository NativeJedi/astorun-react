import { Selector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { ICartState, TCartItemsEntries } from './cart.types';

const selectCart = (state: RootState) => state.cart;

export const selectCartIsOpened: Selector<RootState, boolean> = createSelector(
  [selectCart],
  ({ isOpened }: ICartState) => isOpened
);

export const selectCartItems: Selector<
  RootState,
  TCartItemsEntries
> = createSelector([selectCart], (cart: ICartState) =>
  Object.entries(cart.items)
);

export const selectCartTotal: Selector<RootState, number> = createSelector(
  [selectCartItems],
  (cartItemEntries) => {
    const totalPrice = cartItemEntries.reduce(
      (total, [, { price, quantity }]) => total + price * quantity,
      0
    );

    return Number(totalPrice.toFixed(2));
  }
);
