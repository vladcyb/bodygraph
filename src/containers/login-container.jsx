import React             from 'react';
import {reduxForm}       from 'redux-form';
import loginValidation   from './validations/login-validation';
import * as loginActions from '../actions/auth';
import LoginForm         from '../components/login-form';

const fields = ['email', 'password'];

export default reduxForm(
  {
    form: 'login',
    fields,
    validate: loginValidation
  },
  null,
  loginActions
)(LoginForm);
