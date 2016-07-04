import './index.scss';
import React            from 'react';
import { Provider }     from 'react-redux';
import store            from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BodyData         from 'components/body-data';
import Home             from 'components/home';
import Signup           from 'components/signup';
import Chart            from 'components/chart';
import Table            from 'components/table';
import NewBodyData      from 'components/new-body-data';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import {
  onRootEnter,
  onBodyDataEnter,
  onRegisterEnter
} from './route-hooks';

export default <Provider store={store}>
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Home} onEnter={onRootEnter}/>
      <Route path="/register" component={Signup} onEnter={onRegisterEnter}/>
      <Route path="/body-data" component={BodyData} onEnter={onBodyDataEnter(store)}>
        <IndexRoute component={Chart} />
        <Route path="table" component={Table} />
        <Route path="new" component={NewBodyData} />
      </Route>
    </Router>
  </MuiThemeProvider>
</Provider>;
