import { Button } from '@material-ui/core';
import { FormApi } from 'final-form';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../api/requests';
import { clearCartAction } from '../../redux/cart/cart.actions';
import { TCartItemsEntries } from '../../redux/cart/cart.types';
import { IOrder } from '../../types/order.types';
import {
  requiredRule,
  TValidatorConfig,
  handleValidate,
  composeRules,
  emailRule,
} from '../../validator/rules';
import AppTextField from '../app-text-field/app-text-field.component';
import AppPhoneField from '../app-phone-field/app-phone-field.component';
import './app-checkout-form.styles.scss';

export type ICheckoutFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  delAddress: string;
  delCity: string;
};

interface IAppCheckoutFormProps {
  cartItems: TCartItemsEntries;
  setLoading: (isLoading: boolean) => void;
}

const validatorConfig: TValidatorConfig = {
  firstName: requiredRule,
  lastName: requiredRule,
  phone: requiredRule,
  email: composeRules(requiredRule, emailRule),
  delAddress: requiredRule,
  delCity: requiredRule,
};

const formOrder = (
  {
    firstName,
    lastName,
    phone,
    email,
    delAddress,
    delCity,
  }: ICheckoutFormValues,
  cartItems: TCartItemsEntries
): IOrder => {
  const items = cartItems.map(([, cartItem]) => ({
    size: cartItem.selectedSize.id,
    count: cartItem.quantity,
  }));

  return {
    firstName,
    lastName,
    phone,
    email,
    delAddress,
    delCity,
    items,
  };
};

const AppCheckoutForm = ({
  cartItems,
  setLoading,
}: IAppCheckoutFormProps): React.ReactElement => {
  const dispatch = useDispatch();

  const handleOrder = async (
    checkoutFormValues: ICheckoutFormValues,
    form: FormApi<ICheckoutFormValues>
  ): Promise<Error | null> => {
    const order = formOrder(checkoutFormValues, cartItems);

    setLoading(true);
    try {
      await createOrder(order);

      Object.keys(checkoutFormValues).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        form.change(key, '');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        form.resetFieldState(key);
      });

      dispatch(clearCartAction());
    } catch (e) {
      return e;
    } finally {
      setLoading(false);
    }

    return null;
  };

  return (
    <Form
      onSubmit={handleOrder}
      validate={(values) =>
        handleValidate<ICheckoutFormValues>(validatorConfig, values)
      }
      render={({ handleSubmit }) => (
        <form className="app-checkout-form" onSubmit={handleSubmit}>
          <div className="app-checkout-subtitle">
            Leave your contacts for us
          </div>

          <div className="app-checkout-form__row">
            <Field
              name="firstName"
              label="First name"
              component={AppTextField}
            />
          </div>

          <div className="app-checkout-form__row">
            <Field name="lastName" label="Last name" component={AppTextField} />
          </div>

          <div className="app-checkout-form__row">
            <Field name="phone" label="Phone" component={AppPhoneField} />
          </div>

          <div className="app-checkout-form__row">
            <Field name="email" label="Email" component={AppTextField} />
          </div>

          <div className="app-checkout-form__row">
            <Field name="delAddress" label="Address" component={AppTextField} />
          </div>

          <div className="app-checkout-form__row">
            <Field name="delCity" label="City" component={AppTextField} />
          </div>

          <div className="app-checkout-form__footer">
            <Button variant="contained" color="primary" type="submit">
              Send my order
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default AppCheckoutForm;
