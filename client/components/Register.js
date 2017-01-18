import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Register = ({ registerUser }) => {

  return (
    <div className="login-div">
      <Paper className="login-form" zDepth={3}>
        <h1>Register an Account</h1>
        <form onSubmit={registerUser}>
          <span>
            <TextField
              className="login-field"
              hintText="Username"
              name="username"
              type="text"
              floatingLabelText="Username"
            />
            <TextField
              className="login-field"
              hintText="Email"
              name="email"
              type="email"
              floatingLabelText="Email"
            />
            <TextField
              className="login-field"
              hintText="Password"
              name="password"
              type="password"
              floatingLabelText="Password"
            />
            <TextField
              className="login-field"
              hintText="Confirm Password"
              name="password2"
              type="password"
              floatingLabelText="Confirm Password"
            />
            <RaisedButton
              className="login-btn"
              label="Register"
              secondary={true}
              type="submit"
            />
            <Link to="/">
              <RaisedButton
                className="login-btn"
                label="Login"
                primary={true}
              />
            </Link>
          </span>
        </form>
      </Paper>
    </div>
  );
};

React.propTypes = {
  registerUser: React.PropTypes.func.isRequired,
};

export default Register;
