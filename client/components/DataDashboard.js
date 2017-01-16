import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

const DataDashboard = ({ qualPolDataRows, qualEconDataRows, qualSocDataRows, qualGeoDataRows, quantPolDataRows, quantEconDataRows, quantSocDataRows, quantGeoDataRows }) => {
  return (
    <Table selectable = { false } >
      <TableHeader displaySelectAll = { false }>
        <TableRow>
          <TableHeaderColumn>CATEGORY</TableHeaderColumn>
          <TableHeaderColumn>INDICATOR</TableHeaderColumn>
          <TableHeaderColumn>VALUE</TableHeaderColumn>
          <TableHeaderColumn>YEAR</TableHeaderColumn>
          <TableHeaderColumn>SAVE</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody stripedRows = { true } displayRowCheckbox = { false }>
        { qualPolDataRows }
        { quantPolDataRows }
        { qualEconDataRows }
        { quantEconDataRows }
        { qualSocDataRows }
        { quantSocDataRows }
        { qualGeoDataRows }
        { quantGeoDataRows }
      </TableBody>
    </Table>
  );
};

DataDashboard.propTypes = {
  
};

export default DataDashboard;