import { WrappedFieldProps } from 'redux-form';
import { Select, InputLabel, FormControl, FormHelperText } from '@mui/material';

export const SelectInput = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}: WrappedFieldProps & {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <FormControl fullWidth error={touched && error}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        id={label}
        label={label}
        labelId={label}
        fullWidth
        {...input}
        {...custom}
      />
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
