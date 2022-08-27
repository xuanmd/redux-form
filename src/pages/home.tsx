import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Field,
  reduxForm,
  GenericField,
  FormStateMap,
  formValueSelector,
  InjectedFormProps,
} from 'redux-form';

import { Grid, Button, MenuItem, Container } from '@mui/material';
import { TextInput } from '../components/TextInput';
import { SelectInput } from '../components/SelectInput';
import { SwitchInput } from '../components/SwitchInput';

// Redux
import { validate } from '../redux/validate';
import { ContactForm } from '../redux/form';

interface HomePageProps {
  showFullAddress: boolean;
}

type Props = InjectedFormProps<ContactForm, HomePageProps> & HomePageProps;

const TextInputField = Field as new () => GenericField<{ label: string }>;
const SelectInputField = Field as new () => GenericField<{
  label: string;
  children: React.ReactNode;
}>;
const SwitchInputField = Field as new () => GenericField<{ label: string }>;

const HomePage = (props: Props) => {
  const {
    handleSubmit,
    pristine,
    invalid,
    reset,
    submitting,
    showFullAddress,
  } = props;
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/success');
  };

  return (
    <Container fixed>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} marginTop={2}>
          <Grid item sm={10}>
            <TextInputField
              name='userAddress'
              component={TextInput}
              label='Your address'
            />
          </Grid>
          <Grid item sm={2}>
            <SwitchInputField
              name='showFullAddress'
              component={SwitchInput}
              label='Full Address'
            />
          </Grid>
          {!showFullAddress && (
            <>
              <Grid item sm={4}>
                <SelectInputField
                  name='ward'
                  label='Ward'
                  component={SelectInput}
                >
                  <MenuItem value='Ward 1'>Ward 1</MenuItem>
                  <MenuItem value='Ward 2'>Ward 2</MenuItem>
                  <MenuItem value='Ward 3'>Ward 3</MenuItem>
                </SelectInputField>
              </Grid>
              <Grid item sm={4}>
                <SelectInputField
                  name='district'
                  label='District'
                  component={SelectInput}
                >
                  <MenuItem value='District 1'>District 1</MenuItem>
                  <MenuItem value='District 2'>District 2</MenuItem>
                  <MenuItem value='District 3'>District 3</MenuItem>
                </SelectInputField>
              </Grid>
              <Grid item sm={4}>
                <SelectInputField
                  name='city'
                  label='City'
                  component={SelectInput}
                >
                  <MenuItem value='City 1'>City 1</MenuItem>
                  <MenuItem value='City 2'>City 2</MenuItem>
                  <MenuItem value='City 3'>City 3</MenuItem>
                </SelectInputField>
              </Grid>
            </>
          )}

          <Grid item sm={12}>
            <TextInputField name='email' component={TextInput} label='Email' />
          </Grid>
          <Grid item sm={6}>
            <TextInputField
              name='lastName'
              component={TextInput}
              label='Last name'
            />
          </Grid>
          <Grid item sm={6}>
            <TextInputField
              name='firstName'
              component={TextInput}
              label='First name'
            />
          </Grid>
          <Grid item sm={2}>
            <Button
              type='submit'
              variant='contained'
              disabled={pristine || submitting || invalid}
              style={{ marginRight: 10 }}
            >
              Submit
            </Button>
            <Button
              variant='outlined'
              disabled={pristine || submitting}
              onClick={reset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

const DecoratedHomePage = reduxForm<ContactForm, HomePageProps>({
  form: 'contact',
  validate,
  destroyOnUnmount: false,
})(HomePage);

const selector = formValueSelector('contact');
export default connect((state: FormStateMap) => {
  const showFullAddress = selector(state, 'showFullAddress');

  return { showFullAddress };
})(DecoratedHomePage);
