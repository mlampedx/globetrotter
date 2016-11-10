import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { globetrotterReducers } from './reducers';

const defaultState = {
  appState: {
    activeCountry: 'us-usa',
    activeCategory: 'all',
    qualCountryData: {},
  },
  // userState: {
      // google_id: document.cookie.replace(/(?:(?:^|.*;\s*)google_id\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
      // username: '',
      // saved_data: {},
  // }
};

// create react router middleware

const newRouter = routerMiddleware(browserHistory);

// apply all middleware for redux

const middleware = applyMiddleware(newRouter);

// create store

export const store = createStore(globetrotterReducers, defaultState, middleware);

// sync react and react-router history

export const history = syncHistoryWithStore(browserHistory, store);
