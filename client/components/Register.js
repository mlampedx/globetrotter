import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Register = ({registerUser}) => {

  return (
    <div className = 'login-div'>
      <Paper className = 'login-form' zDepth = {3}>
        <h1>Register an Account</h1>
        <form onSubmit={registerUser}>
          <span>
            <TextField 
              className = 'login-field'
              hintText = 'Username'
              name = 'username'
              type = 'text' 
            />
            <TextField 
              className = 'login-field'
              hintText = 'Email'
              name = 'email'
              type = 'email'
            />
            <TextField 
              className = 'login-field'
              hintText = 'Password'
              name = 'password'
              type = 'password'
            />
            <TextField 
              className = 'login-field'
              hintText = 'Confirm Password'
              name = 'password2'
              type = 'password'
            />
            <RaisedButton 
              className = "login-btn"
              label = 'Register'
              secondary = { true }
              type = "submit" 
            >
            </RaisedButton>
            <Link to="/">
              <RaisedButton 
                className = "login-btn"
                label = 'Login'
                primary = { true }
              >
              </RaisedButton>
            </Link>
          </span>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
