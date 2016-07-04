import { List,  fromJS } from 'immutable';

import {
  FETCH_USER_BODY_DATA_SUCCEEDED,
  SIGN_OUT_SUCCEEDED,
  BODY_DATA_FORM_SUCCESS
} from 'action-types';

export default (state = List(), {type, payload}) => {
  switch (type) {
    case FETCH_USER_BODY_DATA_SUCCEEDED:
      return payload;
    case SIGN_OUT_SUCCEEDED:
      return List();
    case BODY_DATA_FORM_SUCCESS:
      return state.push(fromJS(payload));
    default:
      return state;
  }
};
