import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';

class Welcome extends Component {
  
  verifyUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // post request to verify user, redirects to login page on invalid input
    $.post('/login', {
      username,
      password,
    })
      .done(() => browserHistory.push('/dashboard'))
      .fail((err) => {
        browserHistory.push('/');
        throw new Error(err);
      });
  }

  registerUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const password = event.target.elements[2].value;
    const password2 = event.target.elements[3].value;

    // post request to register a new user, redirects to signup page for invalid inputs
    $.post('/register', {
      username, 
      email,
      password,
      password2,
    })
      .done(() => browserHistory.push('/dashboard'))
      .fail((err) => {
        browserHistory.push('/register');
        throw new Error(err);
      });
  }

  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        verifyUser: this.verifyUser,
        registerUser: this.registerUser,
      });
    });

    return (
      <div className="welcome">
        {children}
      </div>
    );
  }
}

Welcome.propTypes = {
  children: React.PropTypes.any,
}

export default Welcome;
