import                      './index.scss';
import React                from 'react';
import {render}             from 'react-dom';
import {Provider}           from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes               from './routes';
import store                from './store';

injectTapEventPlugin();

const app = <Provider store={store}>
  {routes}
</Provider>;

render(app, document.getElementById('app'));
