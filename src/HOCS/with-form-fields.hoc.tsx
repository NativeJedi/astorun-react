import React from 'react';
import { FieldRenderProps } from 'react-final-form';

export interface FieldProps extends Partial<FieldRenderProps<string>> {
  label: string;
  error: string;
}

const withFormFields = (Inner: React.ComponentType<FieldProps>) => {
  return ({
    label,
    input,
    meta,
  }: FieldRenderProps<string>): React.ReactElement => {
    const error: string = meta!.touched ? meta!.error : '';

    return <Inner label={label} input={input} error={error} />;
  };
};

export default withFormFields;
