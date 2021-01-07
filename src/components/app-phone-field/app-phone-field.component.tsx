import React from 'react';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import withFormFields, { FieldProps } from '../../HOCS/with-form-fields.hoc';
import AppField from '../app-field/app-field.component';

const AppPhoneField = ({
  label,
  input,
  error,
}: FieldProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <InputMask
      mask="+38(999)-999-99-99"
      value={input!.value}
      onChange={input!.onChange}
    >
      {() => <AppField type="tel" label={label} error={t(error)} />}
    </InputMask>
  );
};

export default withFormFields(AppPhoneField);
