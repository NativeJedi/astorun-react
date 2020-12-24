import React from 'react';
import withFormFields, { FieldProps } from '../../HOCS/with-form-fields.hoc';
import AppField from '../app-field/app-field.component';

const AppTextField = ({
  label,
  input,
  error,
}: FieldProps): React.ReactElement => {
  return <AppField input={input} label={label} error={error} />;
};

export default withFormFields(AppTextField);
