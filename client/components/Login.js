import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Login = ({ verifyUser }) => {
  return (
    <div className="login-div">
      <Paper className="login-form" zDepth={3}>
        <h1>Login to Globetrotter</h1>
        <form onSubmit={verifyUser}>
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
              hintText="Password"
              name="password"
              type="password"
              floatingLabelText="Password"
            />
            <RaisedButton
              className="login-btn"
              label="Login"
              primary={true}
              type="submit"
            >
            </RaisedButton>
            <Link to="/register">
              <RaisedButton
                className="register-btn"
                label="Register"
                secondary={true}
              />
            </Link>
          </span>
        </form>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  verifyUser: React.PropTypes.func,
};

export default Login;
