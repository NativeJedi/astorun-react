import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import AppCartItems from '../app-cart-items/app-cart-items.component';
import './app-order-table.styles.scss';

const AppOrderTable = (): React.ReactElement => {
  const cartItemsEntries = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="app-order-table">
      <div className="app-checkout-subtitle">Total: {cartTotal}</div>

      <AppCartItems cartItems={cartItemsEntries} />
    </div>
  );
};

export default AppOrderTable;
