import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import {
  ExpandableDataRow,
  FavoritesDashboard,
} from './index';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favDataRows: [],
      username: document.cookie.split("=").pop(),
    };
    this.fetchFavRows = this.fetchFavRows.bind(this);
    this.createFavDataRows = this.createFavDataRows.bind(this);
    this.createFavDataRow = this.createFavDataRow.bind(this);
    this.deleteFavDataRow = this.deleteFavDataRow.bind(this);
  }

  componentDidMount() {
    this.fetchFavRows(this.createFavDataRows);
  }

  fetchFavRows(func) {
    JSON.parse(localStorage.getItem('favDataRows')) ?
      this.createFavDataRows(JSON.parse(localStorage.getItem('favDataRows'))) :
      $.post('/favorites', { 
        username: this.state.username,
      })
        .done((data) => { func(data); })
        .fail((error) => { throw new Error(error); });
  }

  createFavDataRows(favData) {
    const favDataRows = favData.map((statistic, i) => {
      return this.createFavDataRow(statistic, i);
    });
    const newState = Object.assign({}, this.state, {
      favDataRows,
    });
    this.setState(newState);
  }
  
  createFavDataRow(statistic, index) {
    const { country, type, category, name, value = 'No data available', year = 2016 } = statistic;

    return (
      <TableRow
        key={`${type}-${category.slice(3)}-R${index}`}
        index={index}
      >
        <TableRowColumn
          key={`fav${country}${category}`}
        >{ country }
        </TableRowColumn>
        <TableRowColumn
          key={`fav${country}${category}${index}`}
        >{ category }</TableRowColumn>
        <TableRowColumn
          key={`fav${country}${category}${name}`}
        >{ name }</TableRowColumn>
        <TableRowColumn
          key={`fav${country}${category}${value.slice(0, 5)}`}
        >{ value }</TableRowColumn>
        <TableRowColumn
          key={`fav${country}${category}${year}`}
        >{ year }</TableRowColumn>
        <TableRowColumn
          key={`fav${country}${category}${index}fav`}
        >
          <ExpandableDataRow
            name={name}
            value={value}
          />
          <FlatButton
            label='DELETE'
            secondary={true}
            onClick={() => this.deleteFavDataRow(index)}
          />
        </TableRowColumn>
      </TableRow>
    );
  }

  deleteFavDataRow(i) {
    const indicatorToDelete = this.state.favDataRows[i].props.children[2]._shadowChildren;

    $.post('/delete-favorite', {
      username: this.state.username,
      name: indicatorToDelete,
    })
      .done(() => {
        browserHistory.push('/favorites');
        const localFavDataRows = JSON.parse(localStorage.getItem('favDataRows'));
        localFavDataRows.splice(i, 1);
        localStorage.setItem('favDataRows', JSON.stringify(localFavDataRows));
        this.fetchFavRows(this.createFavDataRows);
      })
      .fail((err) => {
        browserHistory.push('/favorites');
        throw new Error(err);
      });
  }
  
  render() {
    return (
      <div className='favorites'>
        <FavoritesDashboard
          favDataRows={this.state.favDataRows}
        />
      </div>
    );
  }
}

export default Profile;
