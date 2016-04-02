import React         from 'react';
import {connect}     from 'react-redux';
import BodyDataChart from '../components/body-data-chart';

const mapStateToProps = (state) => {
  return {
    data: state.bodyData
  }
};

export default connect(mapStateToProps)(BodyDataChart);
