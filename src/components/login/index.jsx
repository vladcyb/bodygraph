import React         from 'react';
import { reduxForm } from 'redux-form';
import validations   from './validations';
import * as actions  from './actions';
import LoginForm     from './login-form';

const fields = ['email', 'password'];

export default reduxForm(
  {
    form: 'login',
    fields,
    validate: validations
  },
  null,
  actions
)(LoginForm);
