import { ContactForm, ContactFormKey } from './form';

export const validate = (values: ContactForm) => {
  const errors: { [key in ContactFormKey]?: string } = {};

  const requiredFields: ContactFormKey[] = [
    'email',
    'userAddress',
    'lastName',
    'firstName',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
