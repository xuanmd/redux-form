import { connect } from 'react-redux';
import { FormStateMap, getFormValues } from 'redux-form';
import { Container, Grid, Typography } from '@mui/material';

import { ContactForm } from '../redux/form';

interface SuccessPageProps {
  values?: ContactForm;
}

const SuccessPage = ({ values }: SuccessPageProps) => {
  if (!values) return null;

  const userAddress = values.showFullAddress
    ? values.userAddress
    : `${[values.userAddress, values.ward, values.district, values.city]
        .filter(Boolean)
        .join(', ')}`;

  return (
    <Container>
      <Grid container spacing={1} marginTop={2}>
        <Grid item sm={12}>
          <Typography variant='h3'>Thank you!</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography>Your address:</Typography>
        </Grid>
        <Grid item sm={10}>
          <Typography>{userAddress}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography>Email:</Typography>
        </Grid>
        <Grid item sm={10}>
          <Typography>{values.email}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography>Name:</Typography>
        </Grid>
        <Grid item sm={10}>
          <Typography>{`${values.firstName} ${values.lastName}`}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect((state: FormStateMap) => ({
  values: getFormValues('contact')(state) as ContactForm,
}))(SuccessPage);
