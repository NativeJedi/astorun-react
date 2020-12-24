import { Button } from '@material-ui/core';
import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  requiredRule,
  TValidatorConfig,
  handleValidate,
} from '../../validator/rules';
import AppTextField from '../app-text-field/app-text-field.component';
import AppPhoneField from '../app-phone-field/app-phone-field.component';
import './app-checkout-form.styles.scss';

type IValues = {
  firstName: string;
  email: string;
  phone: string;
};

const validatorConfig: TValidatorConfig = {
  firstName: requiredRule,
  lastName: requiredRule,
  phone: requiredRule,
};

const AppCheckoutForm: React.FC = (): React.ReactElement => {
  const onSubmit = (values: IValues): void => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => handleValidate<IValues>(validatorConfig, values)}
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
