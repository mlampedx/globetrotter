import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

const FavoritesDashboard = ({ favDataRows, deleteFavDataRow }) => {
  console.log('favDataRows', favDataRows)

  return (
    <Table selectable = { false } >
      <TableHeader displaySelectAll = { false }>
        <TableRow>
          <TableHeaderColumn>COUNTRY</TableHeaderColumn>
          <TableHeaderColumn>CATEGORY</TableHeaderColumn>
          <TableHeaderColumn>INDICATOR</TableHeaderColumn>
          <TableHeaderColumn>VALUE</TableHeaderColumn>
          <TableHeaderColumn>YEAR</TableHeaderColumn>
          <TableHeaderColumn>REMOVE</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody stripedRows = { true } displayRowCheckbox = { false }>
        { favDataRows }
      </TableBody>
    </Table>
  );
};

FavoritesDashboard.propTypes = {
  
};

export default FavoritesDashboard;