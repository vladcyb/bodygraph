import React         from 'react';
import { reduxForm } from 'redux-form';
import validations   from './validations';
import * as actions  from './actions';
import SignupForm    from './signup-form';

const fields = ['email', 'password', 'passwordConfirmation'];

export default reduxForm(
  {
    form: 'registration',
    fields,
    validate: validations
  },
  null,
  actions
)(SignupForm);
