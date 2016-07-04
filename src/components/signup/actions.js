import { SIGN_UP_REQUESTED } from 'action-types';

export function onSubmit(data) {
  return {
    type: SIGN_UP_REQUESTED,
    payload: data
  }
}
