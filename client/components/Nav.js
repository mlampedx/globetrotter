import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Nav = () => {
  return (
    <AppBar
      className="nav"
      title="Globetrotter"
      titleStyle={{ fontFamily: 'Syncopate' }}
    >
      <FlatButton
        className="nav-links"
        label={<Link to="/dashboard">Dashboard</Link>}
      />
      <FlatButton
        className="nav-links"
        label={<Link to="/favorites">Favorites</Link>}
      />
      <FlatButton
        className="nav-links"
        label={<Link to="/register">Register</Link>}
      />
    </AppBar>
  );
};

export default Nav;
