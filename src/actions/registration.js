import Firebase           from 'firebase';
import {authWithPassword} from './auth';
import {stopSubmit}       from 'redux-form'

const ref = new Firebase(FIREBASE_URL);

export const onSubmit = (data) => {
  return dispatch => {
    ref.createUser({
      email: data.email,
      password: data.password
    }, (error, userData) => {
      if (error) {
        dispatch(stopSubmit('registration', {email: String(error)}));
      } else {
        dispatch(authWithPassword(data));
      }
    });
  };
};
