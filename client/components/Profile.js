import React, {PropTypes} from 'react';
import FavoritesDashboard from './FavoritesDashboard';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';
import { browserHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favDataRows: [],
      username: document.cookie.split("=").pop(),
    }
    this.createFavDataRows = this.createFavDataRows.bind(this);
    this.createFavDataRow = this.createFavDataRow.bind(this);
    this.deleteFavDataRow = this.deleteFavDataRow.bind(this);
  }

  componentDidMount() {
    $.post('/favorites', { username: this.state.username })
      .done(data => { this.createFavDataRows(data); })
      .fail(error => { throw new Error(error); });
  }

  createFavDataRows(favData) {
    console.log('favData', favData);
    const favDataRows = favData.map((statistic, i) => { 
      return this.createFavDataRow(statistic, i);
    });  

    const newState = Object.assign({}, this.state, {
      favDataRows: favDataRows
    });

    this.setState(newState);
    console.log('newState set:', newState)
  }
  
  createFavDataRow(statistic, index) {
    const { country, type, category, name, value = 'No data available', year = 2016 } = statistic;
    console.log('statistic', statistic)

    return (
      <TableRow key = {`${type}-${category.slice(3)}-R${index}`} index = { index }>
        <TableRowColumn key = { `fav${country}${category}` }>{ country }</TableRowColumn>
        <TableRowColumn key = { `fav${country}${category}${index}` }>{ category }</TableRowColumn>
        <TableRowColumn key = { `fav${country}${category}${name}` }>{ name }</TableRowColumn>
        <TableRowColumn key = { `fav${country}${category}${value.slice(0, 5)}` }>{ value }</TableRowColumn>
        <TableRowColumn key = { `fav${country}${category}${year}` }>{ year }</TableRowColumn>
        <TableRowColumn key = { `fav${country}${category}${index}fav`}>
          <FlatButton label = 'DELETE' secondary = { true } onClick = {() => this.deleteFavDataRow(index) } />
        </TableRowColumn>
      </TableRow>
    )
  }

  deleteFavDataRow(i) {
    let indicatorToDelete = this.state.favDataRows[i].props.children[2]._shadowChildren;

    $.post('/delete-favorite', { username: this.state.username, name: indicatorToDelete })
      .done(data => {
        browserHistory.push('/favorites');
        window.location.reload(true);
      })
      .fail(err => browserHistory.push('/favorites'));
  }
  
  render() {
    return (
      <div className='favorites'>
        <FavoritesDashboard 
          favDataRows = { this.state.favDataRows } 
        />
      </div>
    )
  }
  
};

export default Profile;
