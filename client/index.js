import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
const ReactDOM = require('react-dom');
const Display = require('./components/Display');
const DisplayHeaders = require('./components/DisplayHeaders');
const DataColumn = require('./components/DataColumn');
const DataRow = require('./components/DataRow');
import {store, history} from './redux/store';
import Login from './components/Login';
import Profile from './components/Profile';
import ReduxContainer from './redux/ReduxContainer';

class Provider extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      store = this.props.store
    }
  }

    render() {
      return (this.props.children);
    }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}

ReactDOM.render((
  <Provider store = {store}>
    <Router history={history}>
      <Route path='/' component={ReduxContainer}>
        <IndexRoute component={Display} />
        <Route path='login' component={Login} />
        <Route path='profile' component={Profile} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));