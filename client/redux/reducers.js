import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initState = {
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

function appReducer(state = initState, action) {
  switch(action.type) {
    case 'UPDATE CATEGORY':
      const newCategory = action.category;
      return Object.assign({}, state, { activeCategory: newCategory });
    case 'UPDATE COUNTRY':
      const newCountry = action.event.target.value;
      return Object.assign({}, state, { activeCountry: newCountry });
    case 'UPDATE QUAL DATA':
      const newQualData = action.qualCountryData;
      return Object.assign({}, state, { qualCountryData: newQualData });

    default:
      return state;
  }
}

// function userReducer(state = initState, action) {

// }

export const globetrotterReducers = combineReducers({ appState: appReducer, routing: routerReducer });

export default globetrotterReducers;