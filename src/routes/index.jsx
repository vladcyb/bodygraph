import React                 from 'react';
import Home                  from '../components/home';
import AppContainer          from '../containers/app-container';
import RegistrationContainer from '../containers/registration-container';
import ChartContainer        from '../containers/body-data-chart-container';
import TableContainer        from '../containers/body-data-table-container';
import NewBodyDataContainer  from '../containers/new-body-data-container';
import {
  requireAuth,
  redirectIfLoggedIn
} from '../utils'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

export default <Router history={browserHistory}>
  <Route path="/" component={Home} onEnter={redirectIfLoggedIn}/>
  <Route path="/register" component={RegistrationContainer} onEnter={redirectIfLoggedIn}/>
  <Route path="/body-data" component={AppContainer} onEnter={requireAuth}>
    <IndexRoute component={ChartContainer} />
    <Route path="table" component={TableContainer} />
    <Route path="new" component={NewBodyDataContainer} />
  </Route>
</Router>
