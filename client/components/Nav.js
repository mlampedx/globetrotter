import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Profile from './Profile';

const Nav = props => {
  return (
    <div className = 'nav'>
      <button className='btn-info login-btn'><Link to='/login'>Login</Link></button>
      <button className='btn-info login-btn'><Link to='/register'>Register</Link></button>
      <button className='btn-info profile-btn'><Link to='/profile'>Profile</Link></button>
    </div>
  );
};

export default Nav;