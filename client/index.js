import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Container,
  Display,
  Login,
  Profile,
  Register,
  Welcome,
} from './components';

require('./styles.scss');

const App = () => {
  return (
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route component={Container}>
          <Route path="/" component={Welcome}>
            <IndexRoute component={Login} />
            <Route path="/register" component={Register} />
          </Route>

          <Route path="/dashboard" component={Display} />
          <Route path="/favorites" component={Profile} />
            
        </Route>
      </Router>
    </MuiThemeProvider>
  );
};

render(<App />, document.getElementById('root'));
