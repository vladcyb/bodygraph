import React          from 'react';
import { connect }    from 'react-redux';
import * as actions   from './actions';
import BodyDataLayout from './body-data-layout';

export default connect(null, actions)(BodyDataLayout);
