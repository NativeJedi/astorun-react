import React from 'react';
import { useTranslation } from 'react-i18next';
import withFormFields, { FieldProps } from '../../HOCS/with-form-fields.hoc';
import AppField from '../app-field/app-field.component';

const AppTextField = ({
  label,
  input,
  error,
}: FieldProps): React.ReactElement => {
  const { t } = useTranslation();

  return <AppField input={input} label={label} error={t(error)} />;
};

export default withFormFields(AppTextField);
