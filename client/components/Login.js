import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Login = ({verifyUser}) => {
  return (
    <div className='login-form'>
      <h1>Login for Globetrotter</h1>
      <form onSubmit={verifyUser}>
        <ul>
          <li><label for="username">Username:</label><input name="username" type="text" placeholder="username"></input></li>
          <li><label for="password">Password:</label><input name="password" type="password" placeholder="password"></input></li>
          <button type="submit" className="btn btn-primary">Login</button>
        </ul>
        <Link to="/register" className="btn btn-primary">Register</Link>
      </form>
    </div>
  );
};

export default Login;
