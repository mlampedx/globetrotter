import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Profile from './Profile';

const Nav = (props) => {
  const styles = {
    nav: {
      display: 'inline'
    }
  }

  return (
    <div>
      <button className='btn-info' style = { styles.nav }><Link to='/login'>Login</Link></button>
      <button className='btn-info' style = { styles.nav }><Link to='/profile'>Profile</Link></button>
    </div>
  );
};

export default Nav;