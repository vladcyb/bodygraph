import React           from 'react';
import { reduxForm }   from 'redux-form';
import validations     from './validations';
import * as actions    from './actions';
import NewBodyDataForm from './new-body-data-form';

const fields = ['weight', 'bodyfat', 'image'];

export default reduxForm(
  {
    form: 'body-data-form',
    fields,
    validate: validations
  },
  null,
  actions
)(NewBodyDataForm);
