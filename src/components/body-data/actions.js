import {
  SIGN_OUT_REQUESTED,
  FETCH_USER_BODY_DATA_REQUESTED
} from 'action-types';

export function signOut() {
  return {
    type: SIGN_OUT_REQUESTED,
  };
}

export function fetchBodyData() {
  return {
    type: FETCH_USER_BODY_DATA_REQUESTED
  }
}
