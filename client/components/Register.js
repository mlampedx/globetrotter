import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Register = ({registerUser}) => {
  return (
    <div className='registration-form'>
      <h1>Register an Account for Globetrotter</h1>
      <form onSubmit={registerUser}>
        <ul>
          <li><label>Username:</label><input name="username" type="text" placeholder="username"></input></li>
          <li><label>Email:</label><input name="email" type="email" placeholder="email"></input></li>
          <li><label>Password:</label><input name="password" type="password" placeholder="password"></input></li>
          <li><label>Confirm Password:</label><input name="password2" type="password" placeholder="confirm password"></input></li>
          <button type="submit" className="btn btn-primary">Register</button>
        </ul>
        <Link to="/" className="btn btn-primary">Back</Link>
      </form>
    </div>
  );
};

export default Register;
