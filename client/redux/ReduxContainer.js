import { connect } from 'react-redux';
import { updateCountry, updateCategory, updateQualData } from './actionCreators';
import { bindActionCreators } from 'redux';
import React from 'react';
import Nav from './../components/Nav';

class Container extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (<div>
              <Nav />
              {React.cloneElement(props.children, this.context)}
            </div>);
  }
}

// map redux state to react

const mapStateToProps = (state) => {
  return {
    activeCountry: state.appState.activeCountry,
    activeCategory: state.appState.activeCategory,
    qualCountryData: state.appState.qualCountryData,
    // google_id: state.google_id,
  }
}

// map redux actions to react

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(allActionCreators, dispatch);
  return {
    updateCategory: (category) => dispatch(updateCategory(category)),
    updateCountry: (event) => dispatch(updateCountry(event)),
    updateQualData: (qualCountryData) => dispatch(updateQualData(qualCountryData)),
  }
}

export const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ReduxContainer;