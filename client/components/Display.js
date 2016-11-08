const React = require('react');
const ReactDOM = require('react-dom');
const DisplayHeaders = require('./DisplayHeaders');
const CountrySelector = require('./CountrySelector');
const DataColumn = require('./DataColumn');
const DataRow = require('./DataRow');
const { initQualScraper } = require('./../../server/factbook-scrape-controller');
import { Link } from 'react-router';
import Login from './Login';
import Profile from './Profile';
// const { initQuantScraper } = require('./../../server/worldbank-scrape-controller');


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: 'us-usa',
      activeCategory: 'all',
      qualCountryData: {}
    }
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.segmentQualData = this.segmentQualData.bind(this);
  } 

toggleCategory(category) {
  this.setState({activeCategory: category});
  console.log(this.state.activeCategory);
}

toggleCountry(e) {
  this.setState({activeCountry: e.target.value});
  console.log(this.state.activeCountry);
}

segmentQualData(data) {
  let qualPolDataRows = [];
  let qualEconDataRows = [];
  let qualSocDataRows = [];
  let qualGeoDataRows = [];
  let newState = {};

  data.Pol.forEach((statistic, i) => qualPolDataRows.push(<DataRow data = {statistic} key={i} />));
  data.Econ.forEach((statistic, i) => qualEconDataRows.push(<DataRow data = {statistic} key={i} />));
  data.Soc.forEach((statistic, i) => qualSocDataRows.push(<DataRow data = {statistic} key={i} />));
  data.Geo.forEach((statistic, i) => qualGeoDataRows.push(<DataRow data = {statistic} key={i} />));


  Object.assign(newState, this.state);
    newState.activeCategory = 'all';
    newState.qualCountryData.Pol = qualPolDataRows;
    newState.qualCountryData.Econ = qualEconDataRows;
    newState.qualCountryData.Soc = qualSocDataRows;
    newState.qualCountryData.Geo = qualGeoDataRows;
      this.setState({newState});
      console.log(this.state.qualCountryData)
}

  // segmentQuantData(data) {
  //   console.log('quantitative data:', data)
  //   return
  // }

  render() {
    const styles = {
      container: {
        background: '#D9B310',
        border: '2px solid black',
        fontFamily: 'Arial',
        // width: '100%',
        // display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      },
      login: {
        display: 'inline-block',
        float: 'left'
      },
      profile: {
        display: 'inline-block',
        float: 'right'
      },
      img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }

    return (
      <div className='Display' styles = { styles.container }>
        <img styles = { styles.img } src='globe.png' />
        <CountrySelector
          activeCountry={this.state.activeCountry} 
          toggleCountry={this.toggleCountry} 
          segmentQualData={this.segmentQualData} 
          // segmentQuantData={this.segmentQuantData}
          initQualScraper={initQualScraper}
          // initQuantScraper={initQuantScraper}
        />
        <DisplayHeaders 
          toggleCategory = {this.toggleCategory} 
          activeCategory = {this.state.activeCategory}
        />
        <DataColumn 
          qualPolDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Politics' ? this.state.qualCountryData.Pol : []}
          qualEconDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Economics' ? this.state.qualCountryData.Econ : []}
          qualSocDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Society' ? this.state.qualCountryData.Soc : []}
          qualGeoDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Geopolitics' ? this.state.qualCountryData.Geo : []}       
        />
      </div>
        );
    };  
}

module.exports = Display;