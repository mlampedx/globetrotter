import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';

class Welcome extends Component {
  verifyUser(event) {
    event.preventDefault();
    console.log('Verifying user!')
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // post request to verify user, redirects to login page on invalid input
    $.post('/login', { username: username, password: password })
      .done(data => browserHistory.push('/dashboard'))
      .fail(err => browserHistory.push('/'));
  }

  registerUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const password = event.target.elements[2].value;
    const password2 = event.target.elements[3].value;
    console.log('registerUser event obj:', username, email, password, password2);

    // post request to register a new user, redirects to signup page for invalid inputs
    $.post('/register', { username: username, email: email, password: password, password2: password2 })
      .done(data => browserHistory.push('/dashboard'))
      .fail(err => browserHistory.push('/register'));
  }

  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        verifyUser: this.verifyUser,
        registerUser: this.registerUser
      });
    });

    return (
      <div className="welcome">
        <h1>Globetrotter</h1>
        <img className='globe' src='globe.png' />
        <h4>global intelligence dashboard.</h4>
        {children}
      </div>
    );
  }
}

export default Welcome;
