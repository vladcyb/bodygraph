import Firebase         from 'firebase';
import {stopSubmit}     from 'redux-form'
import {browserHistory} from 'react-router'
import {fetchBodyData}  from './body-data';
import {
  createSession,
  destroySession
} from '../utils';

const ref = new Firebase(FIREBASE_URL);

export const updateAuth = (authData) => {
  browserHistory.push('/body-data');
  return {
    type: 'UPDATE_AUTH',
    payload: authData
  };
};

export const signOut = () => {
  browserHistory.push('/');
  destroySession();
  return {
    type: 'DELETE_AUTH',
  };
}

export const authWithPassword = (data) => {
  return (dispatch) => {
    ref.authWithPassword({
      email: data.email,
      password: data.password
    }, (error, authData) => {
      if (error) {
        dispatch(stopSubmit('login', {password: 'The email or password is incorrect.'}));
      } else {
        createSession(authData);
        dispatch(updateAuth(authData));
        dispatch(fetchBodyData());
      }
    });
  };
};

export const onSubmit = (data) => {
  return authWithPassword(data);
}
