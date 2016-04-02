import Firebase       from 'firebase';
import {List, fromJS} from 'immutable';

const updateBodyData = (state, data) => {
  return state.push(fromJS(data));
};

export default (state = List(), action) => {
  switch (action.type) {
    case 'SET_INITIAL_BODY_DATA':
      return action.payload;
    case 'BODY_DATA_FORM_SUCCESS':
      return updateBodyData(state, action.payload);
    default:
      return state;
  }
};
