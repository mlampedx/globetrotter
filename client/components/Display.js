const React = require('react');
const ReactDOM = require('react-dom');
const DisplayHeaders = require('./DisplayHeaders');
const CountrySelector = require('./CountrySelector');
const DataColumn = require('./DataColumn');
const QualDataRow = require('./QualDataRow');
const QuantDataRow = require('./QuantDataRow');
import { Link } from 'react-router';
import Login from './Login';
import Profile from './Profile';
const { initQualScraper } = require('./../../server/factbook-scrape-controller');
const { initQuantScraper,  polIndicators, socIndicators, econIndicators, geoIndicators  } = require('./../../server/worldbank-scrape-controller');

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: 'us-usa',
      activeCategory: 'all',
      qualCountryData: {},
      quantCountryData: {},
    }
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.segmentQualData = this.segmentQualData.bind(this);
    this.segmentQuantData = this.segmentQuantData.bind(this);
    this.handlePromises = this.handlePromises.bind(this);
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

  data.pol.forEach((statistic, i) => qualPolDataRows.push(<QualDataRow data = {statistic} key={i} />));
  data.econ.forEach((statistic, i) => qualEconDataRows.push(<QualDataRow data = {statistic} key={i} />));
  data.soc.forEach((statistic, i) => qualSocDataRows.push(<QualDataRow data = {statistic} key={i} />));
  data.geo.forEach((statistic, i) => qualGeoDataRows.push(<QualDataRow data = {statistic} key={i} />));


  Object.assign(newState, this.state);
    newState.activeCategory = 'all';
    newState.qualCountryData.pol = qualPolDataRows;
    newState.qualCountryData.econ = qualEconDataRows;
    newState.qualCountryData.soc = qualSocDataRows;
    newState.qualCountryData.geo = qualGeoDataRows;
      this.setState({newState});
      console.log(this.state.qualCountryData)
}

handlePromises(promiseArr) {
  Promise.all(promiseArr).then((jsonArr) => {
    this.segmentQuantData(jsonArr);
  }).catch((err) => {
    throw new Error(err);
  })
}

segmentQuantData(jsonArr) {
  const quantData = {};
  jsonArr.forEach(json => {
    if (json[1]) {
      let dataItem = { 
        indicator: json[1][0].indicator.id,
        name: json[1][0].indicator.value,
        value: json[1][0].value,
        year: json[1][0].date,
        country: json[1][0].country.value 
      };
      if (polIndicators.includes(dataItem.indicator)) {
        quantData.pol ? quantData.pol.push(dataItem) : quantData.pol = [dataItem];
      }
      else if (econIndicators.includes(dataItem.indicator)) {
        quantData.econ ? quantData.econ.push(dataItem) : quantData.econ = [dataItem];
      }
      else if (socIndicators.includes(dataItem.indicator)) {
        quantData.soc ? quantData.soc.push(dataItem) : quantData.soc = [dataItem];
      }
      else if (geoIndicators.includes(dataItem.indicator)) {
        quantData.geo ? quantData.geo.push(dataItem) : quantData.geo = [dataItem];
      }
    }
  })

  let quantPolDataRows = [];
  let quantEconDataRows = [];
  let quantSocDataRows = [];
  let quantGeoDataRows = [];
  let newState = {};

  quantData.pol.forEach((statistic, i) => quantPolDataRows.push(<QuantDataRow data = {statistic} key={i} />));
  quantData.econ.forEach((statistic, i) => quantEconDataRows.push(<QuantDataRow data = {statistic} key={i} />));
  quantData.soc.forEach((statistic, i) => quantSocDataRows.push(<QuantDataRow data = {statistic} key={i} />));
  quantData.geo.forEach((statistic, i) => quantGeoDataRows.push(<QuantDataRow data = {statistic} key={i} />));

  Object.assign(newState, this.state);
    newState.activeCategory = 'all';
    newState.quantCountryData.pol = quantPolDataRows;
    newState.quantCountryData.econ = quantEconDataRows;
    newState.quantCountryData.soc = quantSocDataRows;
    newState.quantCountryData.geo = quantGeoDataRows;
      this.setState({newState});
      console.log('quant data successfully parsed!', this.state)
  
}

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
        margin: 'auto'
      }
    }

    return (
      <div className='Display' styles = { styles.container }>
        <img styles = { styles.img } src='globe.png' />
        <CountrySelector
          activeCountry={this.state.activeCountry} 
          toggleCountry={this.toggleCountry} 
          segmentQualData={this.segmentQualData} 
          handlePromises={this.handlePromises}
          initQualScraper={initQualScraper}
          initQuantScraper={initQuantScraper}
        />
        <DisplayHeaders 
          toggleCategory = {this.toggleCategory} 
          activeCategory = {this.state.activeCategory}
        />
        <DataColumn 
          qualPolDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Politics' ? this.state.qualCountryData.pol : []}
          qualEconDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Economics' ? this.state.qualCountryData.econ : []}
          qualSocDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Society' ? this.state.qualCountryData.soc : []}
          qualGeoDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Geopolitics' ? this.state.qualCountryData.geo : []} 
          quantPolDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Politics' ? this.state.quantCountryData.pol : []}
          quantEconDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Economics' ? this.state.quantCountryData.econ : []}
          quantSocDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Society' ? this.state.quantCountryData.soc : []}
          quantGeoDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Geopolitics' ? this.state.quantCountryData.geo : []}      
        />
      </div>
        );
    };  
}

module.exports = Display;