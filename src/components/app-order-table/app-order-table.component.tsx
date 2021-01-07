import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className="app-order-table">
      <div className="app-checkout-subtitle">
        {t('page.checkout.total')}: {cartTotal}
      </div>

      <AppCartItems cartItems={cartItems} />
    </div>
  );
};

export default AppOrderTable;
