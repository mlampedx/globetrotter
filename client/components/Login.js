import React, {PropTypes} from 'react';

const Login = ({}) => {
  return (
    <div>
      <h1>Login for Globetrotter</h1>
      <form method='POST' action='/login'>
        <ul>
          <li><input name="username" type="text" placeholder="username"></input></li>
          <li><input name="password" type="password" placeholder="password"></input></li>
          <li><input type='submit' value='Login'></input></li>
        </ul>
      </form>
    </div>
  );
};

export default Login;