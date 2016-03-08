require('./index.scss');
import React                            from 'react';
import {render}                         from 'react-dom';
import {Router, Route, browserHistory}  from 'react-router';
import {createStore, applyMiddleware}   from 'redux';
import {Provider}                       from 'react-redux';
import Firebase                         from 'firebase'
import reducer                          from './reducer';
import {setState}                       from './action-creators';
import remoteActionMiddleware           from './remote-action-middleware';
import App                              from './components/app';
import Home                             from './components/home';
import {VotingContainer}                from './components/voting';
import {ResultsContainer}               from './components/results';

//const socket = io(`${location.protocol}//${location.hostname}:8090`);
//socket.on('state', state => store.dispatch(setState(state)));

//const createStoreWithMiddleware = applyMiddleware(
  //remoteActionMiddleware(socket)
//)(createStore);
const firebaseRef = new Firebase('https://freddy-weight-tracke.firebaseio.com/');
const store = createStore(reducer);

const app = <Provider store={store}>
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/results" component={ResultsContainer} />
    </Route>
  </Router>
</Provider>;

const targetElement = document.getElementById('app');
render(app, targetElement);
