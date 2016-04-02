import React            from 'react';
import {connect}        from 'react-redux';
import App              from '../components/app';
import {signOut}        from '../actions/auth'
import {browserHistory} from 'react-router'

const newDataRecord = () => browserHistory.push('/body-data/new');

export default connect(null, {signOut, newDataRecord})(App);
