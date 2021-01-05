import React from 'react';
import { useSelector } from 'react-redux';
import AppCheckoutForm from '../../components/app-checkout-form/app-checkout-form.component';
import AppOrderTable from '../../components/app-order-table/app-order-table.component';
import './checkout.styles.scss';
import withLoader, { IWithLoaderProps } from '../../HOCS/with-loader.hoc';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ setLoading }: IWithLoaderProps): React.ReactElement => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="container">
      <h1 className="main-title">Checkout</h1>

      <div className="app-checkout">
        <AppCheckoutForm setLoading={setLoading} cartItems={cartItems} />

        <AppOrderTable cartItems={cartItems} />
      </div>
    </div>
  );
};

export default withLoader(CheckoutPage);
