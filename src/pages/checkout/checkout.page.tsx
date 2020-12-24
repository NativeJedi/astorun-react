import React from 'react';
import AppCheckoutForm from '../../components/app-checkout-form/app-checkout-form.component';
import AppOrderTable from '../../components/app-order-table/app-order-table.component';
import './checkout.styles.scss';

const CheckoutPage = (): React.ReactElement => {
  return (
    <div className="container">
      <h1 className="main-title">Checkout</h1>

      <div className="app-checkout">
        <AppCheckoutForm />

        <AppOrderTable />
      </div>
    </div>
  );
};

export default CheckoutPage;
