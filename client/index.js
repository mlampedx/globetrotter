import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { 
  Container,
  CountrySelector,
  DataColumn, 
  Display, 
  DisplayHeaders,
  FavoriteDataRow,
  Login, 
  Nav, 
  Profile, 
  QualDataRow, 
  QuantDataRow, 
  Register, 
  Welcome 
} from './components';
require('./styles.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Router history={browserHistory}>
          <Route component={Container}>

          <Route path='/' component={Welcome}>
            <IndexRoute component={Login} />
            <Route path='/register' component={Register} />
          </Route>

          <Route path='/dashboard' component={Display} />
          <Route path='/profile' component={Profile} />
          
          </Route>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
