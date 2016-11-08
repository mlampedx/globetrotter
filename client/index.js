import React from 'react';
import { render } from 'react-dom';
const ReactDOM = require('react-dom');
const Display = require('./components/Display');
const DisplayHeaders = require('./components/DisplayHeaders');
const DataColumn = require('./components/DataColumn');
const DataRow = require('./components/DataRow');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Login from './components/Login';
import Profile from './components/Profile';
import Container from './components/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Display} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
        </Route>
      </Router>
    )
  }
}

// <Route path="*" component={Display}/>
ReactDOM.render(<App />, document.getElementById('root'));


//   render() {

//   const routes = {
//     path: '/',
//     component: App,
//     indexRoute: { component: Display },
//     childRoutes: [
//         { path: '/login', component: Login },
//         { path: '/profile', component: Profile},
//         { path: '*', component: Display}
//     ]
//     };
  
//     return (
//       <Router history={hashHistory} routes={routes} />
//     )
//   }
// }