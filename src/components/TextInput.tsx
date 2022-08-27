import { WrappedFieldProps } from 'redux-form';
import { TextField } from '@mui/material';

export const TextInput = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}: WrappedFieldProps & { label: string }) => {
  return (
    <TextField
      required
      fullWidth
      label={label}
      error={touched && error}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};
