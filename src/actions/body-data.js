import Firebase         from 'firebase';
import Cookie           from 'js-cookie';
import {browserHistory} from 'react-router';
import {fromJS, List}   from 'immutable';
import {map, values}    from 'ramda';
import {getId}          from '../utils';

const ref = new Firebase(FIREBASE_URL);


export const bodyDataFormSuccess = (data) => {
  browserHistory.push('/body-data');
  return {
    type: 'BODY_DATA_FORM_SUCCESS',
    payload: data,
  };
};

export const setInitialBodyData = (data) => {
  return {
    type: 'SET_INITIAL_BODY_DATA',
    payload: data
  };
}

const callFirebaseForBodyData = (uid, dispatch) => {
  const userBodyDataRef = ref.child('bodyData').child(uid);
  userBodyDataRef.once('value', (snapshot) => {
    const data = fromJS(map(JSON.parse, values(snapshot.val())));
    dispatch(setInitialBodyData(data));
  }, (error) => {
    if (error) console.log('error');
  });
};

export const fetchBodyData = () => {
  return (dispatch, getState) => {
    const uid = fromJS(getState().auth).get('uid');
    if (uid) callFirebaseForBodyData(uid, dispatch);
    else dispatch(setInitialBodyData(List()));
  };
}

export const onSubmit = (data) => {
  return (dispatch) => {
    data['createdAt'] = Date.now();
    const userBodyDataFirebaseRef = ref.child('bodyData').child(`${getId()}`).push();
    userBodyDataFirebaseRef.set(JSON.stringify(data), (error) => {
      if (error) {
        console.log(error);
      }
      else {
        dispatch(bodyDataFormSuccess(data));
      }
    });
  };
};
