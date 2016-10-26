import React from 'react';
import { render } from 'react-dom';
const ReactDOM = require('react-dom');
const Display = require('./components/Display');
const DisplayHeaders = require('./components/DisplayHeaders');
const DataColumn = require('./components/DataColumn');
const DataRow = require('./components/DataRow');

// uncomment so that webpack can bundle styles
import styles from './client/styles.css';

const App = () => {
  return (<div style = { styles.container } ><Display id='display'/></div>)
}

ReactDOM.render(<App />, document.getElementById('root'));