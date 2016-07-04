import './index.scss';
import React       from 'react';
import { connect } from 'react-redux';
import Chart       from './chart';

const mapStateToProps = ({bodyData}) => {
  return {
    bodyData
  }
};

export default connect(mapStateToProps)(Chart);
