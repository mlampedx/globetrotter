import React, {PropTypes} from 'react';

const Register = ({}) => {
  return (
    <div>
      <h1>Register an Account for Globetrotter</h1>
      <form method='POST' action='/register'>
        <ul>
          <li><input name="email" type="text" placeholder="email"></input></li>
          <li><input name="username" type="text" placeholder="username"></input></li>
          <li><input name="password" type="password" placeholder="password"></input></li>
          <li><input name="password2" type="password" placeholder="confirm password"></input></li>
          <li><input type='submit' value='Register Account'></input></li>
        </ul>
      </form>
    </div>
  );
};

Register.propTypes = {
  
};

export default Register;