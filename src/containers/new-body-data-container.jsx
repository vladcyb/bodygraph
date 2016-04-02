import React                from 'react';
import {reduxForm}          from 'redux-form';
import bodyDataValidation   from './validations/body-data-validation';
import * as BodyDataActions from '../actions/body-data';
import BodyDataForm         from '../components/body-data-form';

const fields = ['weight', 'bodyfat', 'image'];

export default reduxForm(
  {
    form: 'body-data-form',
    fields,
    validate: bodyDataValidation
  },
  null,
  BodyDataActions
)(BodyDataForm);
