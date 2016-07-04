import 'babel-polyfill';
import React                from 'react';
import { render }           from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Application          from 'application';

injectTapEventPlugin();

render(Application, document.getElementById('app'));
