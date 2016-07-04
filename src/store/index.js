import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware             from 'redux-saga';
import thunk                            from 'redux-thunk';
import { browserHistory }               from 'react-router'
import { syncHistoryWithStore }         from 'react-router-redux'
import rootSaga                         from 'sagas';
import rootReducer                      from './reducers';
import logger                           from './logger';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  sagaMiddleware,
  logger
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
