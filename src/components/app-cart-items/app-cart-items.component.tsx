import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeItemQuantityAction,
  removeCartItemAction,
} from '../../redux/cart/cart.actions';
import { TCartItemsEntries } from '../../redux/cart/cart.types';
import AppCartItem from '../app-cart-item/app-cart-item.component';

interface AppCartItemsProps {
  cartItems: TCartItemsEntries;
}

const AppCartItems = ({ cartItems }: AppCartItemsProps): React.ReactElement => {
  const dispatch = useDispatch();

  const handleItemQuantityChange = useCallback(
    (id: string) => (quantity: number) => {
      dispatch(changeItemQuantityAction({ id, quantity }));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id: string) => () => dispatch(removeCartItemAction(id)),
    [dispatch]
  );

  return (
    <div className="app-cart-items">
      {cartItems.map(([id, item]) => (
        <AppCartItem
          key={id}
          item={item}
          onQuantityChange={handleItemQuantityChange(id)}
          onRemove={handleRemove(id)}
        />
      ))}
    </div>
  );
};

export default AppCartItems;
