import { SIGN_IN_REQUESTED } from 'action-types';

export function onSubmit(data) {
  return {
    type: SIGN_IN_REQUESTED,
    payload: data
  };
}

