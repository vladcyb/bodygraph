import { getAuthData } from 'auth';
import { fromJS, Map } from 'immutable';

import {
  SIGN_OUT_SUCCEEDED,
  SIGN_IN_SUCCEEDED
} from 'action-types';

export default (state = getAuthData(), {type, payload}) => {
  switch (type) {
    case SIGN_IN_SUCCEEDED:
      return fromJS(payload);
    case SIGN_OUT_SUCCEEDED:
      return Map();
    default:
      return state;
  }
};
