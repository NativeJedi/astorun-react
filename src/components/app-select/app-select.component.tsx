import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import './app-select.styles.scss';

interface IAppSelectProps {
  items: (string | number)[];
  onChange: (value: string) => void;
  value: string | number;
  label: string;
  id: string;
}

const AppSelect = ({
  items,
  onChange,
  value,
  label,
  id,
}: IAppSelectProps): React.ReactElement => {
  const handleChange = (e: ChangeEvent<{ value: unknown }>): void => {
    onChange(String(e.target.value));
  };

  return (
    <FormControl variant="outlined" classes={{ root: 'app-select-control' }}>
      <InputLabel classes={{ root: 'app-select-label' }} htmlFor={id}>
        {label}
      </InputLabel>
      <Select
        classes={{ root: 'app-select-root' }}
        labelId={id}
        label={label}
        value={value}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
