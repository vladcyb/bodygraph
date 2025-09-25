import Firebase                          from 'firebase';
import { takeLatest }                    from 'redux-saga';
import { call, put, select }             from 'redux-saga/effects';
import { stopSubmit }                    from 'redux-form';
import { map, values }                   from 'lodash/fp';
import { browserHistory }                from 'react-router';
import { createSession, destroySession } from 'auth';
import * as actions                      from 'action-types';
import { fromJS }                        from 'immutable';

const ref = new Firebase("bodygraph-23380.firebaseio.com");

export default function* rootSaga() {
  yield [
    takeLatest(actions.SIGN_OUT_REQUESTED, signOut),
    takeLatest(actions.SIGN_IN_REQUESTED, signIn),
    takeLatest(actions.SIGN_UP_REQUESTED, signUp),
    takeLatest(actions.FETCH_USER_BODY_DATA_REQUESTED, fetchUserBodyData),
    takeLatest(actions.SUBMIT_BODY_DATA_REQUESTED, submitBodyData)
  ];
}

function* signOut(action) {
  try {

    destroySession();

    yield put({
      type: actions.SIGN_OUT_SUCCEEDED
    });

    yield call(browserHistory.push, '/');

  } catch(error) {

    yield put({
      type: actions.SIGN_OUT_FAILED,
      error: true,
      payload: error
    });

  }
}

function* signIn({payload: {email, password}}) {
  try {
    const authData = yield ref.authWithPassword({
      email,
      password
    });

    yield createSession(authData);

    yield put({
      type    : actions.SIGN_IN_SUCCEEDED,
      payload : authData
    });

    yield call(browserHistory.push, '/body-data');

  } catch (error) {
    const errorMessage = error.toString().match(/Error: (.*)/)[1];

    yield put(stopSubmit('login', {password: errorMessage}));
  }
}

function* signUp({payload: {email, password}}) {
  try {
    const uid = yield ref.createUser({
      email,
      password
    });
    yield call(signIn, {payload: {email, password}});
  } catch (error) {
    const errorMessage = error.toString().match(/Error: (.*)/)[1];
    yield put(stopSubmit('registration', {email: errorMessage}));
  }
};

function* fetchUserBodyData(action) {
  try {
    const uid = yield select(getUid);
    const bodyData = yield call(getBodyDataFromFirebase, uid)
    yield put({
      type    : actions.FETCH_USER_BODY_DATA_SUCCEEDED,
      payload : bodyData
    });
  } catch (error) {
    yield put({
      type    : actions.FETCH_USER_BODY_DATA_FAILED,
      error   : true,
      payload : error
    });
  }
}

function* submitBodyData({payload}) {
  try {
    const uid = yield select(getUid);
    payload.createdAt = Date.now();
    const userBodyDataRef = ref.child('bodyData').child(uid).push();
    const data = yield userBodyDataRef.set(JSON.stringify(payload));

    yield put({
      type: actions.SUBMIT_BODY_DATA_SUCCEEDED,
      payload: data
    });

    browserHistory.push('/body-data');

  } catch (error) {

    yield put({
      type: actions.SUBMIT_BODY_DATA_FAILED,
      error: true,
      payload: error
    });
  }
}

function* getBodyDataFromFirebase(uid) {
  try {
    const userBodyDataRef = ref.child('bodyData').child(uid);
    const snapshot = yield userBodyDataRef.once('value');
    return fromJS(map(JSON.parse, values(snapshot.val())));
  } catch (error) {
    throw error;
  }
}

function getUid(state) {
  return fromJS(state.auth).get('uid');
}
