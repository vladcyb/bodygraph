import { SUBMIT_BODY_DATA_REQUESTED } from 'action-types';

export function onSubmit(data) {
  return {
    type: SUBMIT_BODY_DATA_REQUESTED,
    payload: data
  }
};
