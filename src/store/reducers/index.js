import {combineReducers}        from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer              from './auth';
import bodyDataReducer          from './body-data';

const rootReducer = combineReducers({
  form      : formReducer,
  auth      : authReducer,
  bodyData  : bodyDataReducer
});

export default rootReducer;

