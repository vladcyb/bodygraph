import React     from 'react';
import {connect} from 'react-redux';
import Table     from './table';

const mapStateToProps = ({bodyData}) => {
  return {
    bodyData
  }
};

export default connect(mapStateToProps)(Table);
