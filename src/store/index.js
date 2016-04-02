import {applyMiddleware, createStore} from 'redux';
import thunk                          from 'redux-thunk';
import rootReducer                    from './reducers';
import logger                         from './middleware/logger';
import {fetchBodyData}                from '../actions/body-data';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
store.dispatch(fetchBodyData());

export default store;
