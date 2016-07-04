import { combineReducers }        from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer }          from 'react-router-redux'
import bodyDataReducer            from 'components/body-data/reducer';
import authReducer                from 'components/login/reducer';

const rootReducer = combineReducers({
  auth     : authReducer,
  form     : formReducer,
  bodyData : bodyDataReducer,
  routing  : routerReducer
});

export default rootReducer;

