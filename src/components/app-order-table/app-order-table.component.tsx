import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { TCartItemsEntries } from '../../redux/cart/cart.types';
import AppCartItems from '../app-cart-items/app-cart-items.component';
import './app-order-table.styles.scss';

interface IAppOrderTableProps {
  cartItems: TCartItemsEntries;
}

const AppOrderTable = ({
  cartItems,
}: IAppOrderTableProps): React.ReactElement => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="app-order-table">
      <div className="app-checkout-subtitle">Total: {cartTotal}</div>

      <AppCartItems cartItems={cartItems} />
    </div>
  );
};

export default AppOrderTable;
