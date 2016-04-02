import {getAuthData} from '../../../utils'
import {fromJS, Map} from 'immutable';

export default (state = getAuthData(), action) => {
  switch (action.type) {
    case 'UPDATE_AUTH':
      return fromJS(action.payload);
    case 'DELETE_AUTH':
      return Map();
    default:
      return state;
  }
};
