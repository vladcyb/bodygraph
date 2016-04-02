import React                    from 'react';
import {reduxForm}              from 'redux-form';
import registrationValidation   from './validations/registration-validation';
import * as registrationActions from '../actions/registration';
import Registration             from '../components/registration-form';

const fields = ['email', 'password', 'passwordConfirmation'];

export default reduxForm(
  {
    form: 'registration',
    fields,
    validate: registrationValidation
  },
  null,
  registrationActions
)(Registration);
