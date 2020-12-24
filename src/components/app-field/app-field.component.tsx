import { TextField } from '@material-ui/core';
import React from 'react';
import { FieldProps } from '../../HOCS/with-form-fields.hoc';
import './app-field.styles.scss';

interface AppFieldProps extends FieldProps {
  type?: string;
}

const AppField = ({
  type,
  label,
  input,
  error,
  ...rest
}: AppFieldProps): React.ReactElement => (
  <TextField
    {...input}
    {...rest}
    classes={{ root: 'app-field' }}
    type={type}
    label={label}
    variant="outlined"
    error={Boolean(error)}
    helperText={error}
  />
);

AppField.defaultProps = {
  type: '',
};

export default AppField;
