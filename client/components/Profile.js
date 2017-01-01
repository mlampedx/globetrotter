import React, {PropTypes} from 'react';
import FavoriteDataRow from './FavoriteDataRow';
import $ from 'jquery';
import { browserHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteDataRows: [],
      username: document.cookie.split("=").pop(),
    }
    this.createFavoriteIndicatorRows = this.createFavoriteIndicatorRows.bind(this);
    this.deleteFavoriteIndicator = this.deleteFavoriteIndicator.bind(this);
  }

  componentDidMount() {
    $.post('/profile', { username: this.state.username })
      .done(data => { this.createFavoriteIndicatorRows(data); })
      .fail(error => { throw new Error(error); });
  }

  createFavoriteIndicatorRows(data) {
    const favoriteIndicatorRows = [];

    data.forEach((indicator, i) => {
      favoriteIndicatorRows.push(<FavoriteDataRow data = {indicator} deleteFavoriteIndicator = {this.deleteFavoriteIndicator} key={`fav${i}`} index = {i} />);
    });

    const newState = Object.assign({}, this.state, { favoriteDataRows: favoriteIndicatorRows });
    this.setState(newState);
  }

  deleteFavoriteIndicator(i) {
    let indicatorIndex = i;
    let indicatorToDelete = this.state.favoriteDataRows[i].props.data.name;

    $.post('/delete-favorite', { username: this.state.username, name: indicatorToDelete })
      .done(data => {
        browserHistory.push('/profile');
        window.location.reload(true);
      })
      .fail(err => browserHistory.push('/profile'));
  }
  
  render() {
    return (
      <div className='profile'>
        {this.state.favoriteDataRows}
      </div>
    )
  }
  
};

export default Profile;
