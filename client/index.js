import React from 'react';
import { render } from 'react-dom';
const ReactDOM = require('react-dom');
const Display = require('./components/Display');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Container from './components/Container';
require('./styles.scss');

function requireAuth(nextState, replace, callback) {
  if (document.cookie) {
    console.log('Cookie found:', document.cookie);
    replace('/profile');
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Display} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} onEnter={requireAuth}/>
            <Route path='/register' component={Register} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
