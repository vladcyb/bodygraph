import React    from 'react';
import ReactDOM from 'react-dom';
import Chart    from 'chart.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

const renderRow = (record, index) => {
  return <TableRow key={index}>
    <TableRowColumn>{new Date(record.createdAt).toString().slice(0, 10)}</TableRowColumn>
    <TableRowColumn>{record.weight}</TableRowColumn>
    <TableRowColumn>{record.bodyfat}</TableRowColumn>
  </TableRow>
};

const renderRows = (data) => data.toJS().map(renderRow);

const BodyDataTable = (p) => {
  return <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Weight</TableHeaderColumn>
        <TableHeaderColumn>Bodyfat</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {renderRows(p.data)}
    </TableBody>
  </Table>
}

export default BodyDataTable;
