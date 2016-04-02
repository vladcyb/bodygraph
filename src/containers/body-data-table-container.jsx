import React         from 'react';
import {connect}     from 'react-redux';
import BodyDataTable from '../components/body-data-table';

const mapStateToProps = (state) => {
  return {
    data: state.bodyData
  }
};

export default connect(mapStateToProps)(BodyDataTable);
