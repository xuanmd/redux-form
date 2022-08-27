import { WrappedFieldProps } from 'redux-form';
import { Switch, FormControlLabel } from '@mui/material';

export const SwitchInput = ({
  input,
  label,
}: WrappedFieldProps & { label: string }) => {
  return (
    <FormControlLabel
      control={<Switch checked={input.value} {...input} />}
      label={label}
    />
  );
};
