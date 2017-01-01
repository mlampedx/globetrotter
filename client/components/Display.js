const React = require('react');
const ReactDOM = require('react-dom');
const { initQualScraper } = require('./../utils/factbook-scrape-controller');
const { initQuantScraper,  polIndicators, socIndicators, econIndicators, geoIndicators } = require('./../utils/worldbank-scrape-controller');
import $ from 'jquery';
import { Link, browserHistory } from 'react-router';
import {
  DisplayHeaders,
  CountrySelector,
  DataColumn,
  QualDataRow,
  QuantDataRow,
} from './index';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: 'us-usa',
      activeCategory: 'all',
      qualDataCache: {},
      quantDataCache: {},
      activeQuantRows: {},
      activeQualRows: {},
      username: document.cookie.split("=").pop(),
    }
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.cacheQualData = this.cacheQualData.bind(this);
    this.cacheQuantData = this.cacheQuantData.bind(this);
    this.handlePromises = this.handlePromises.bind(this);
    this.segmentQuantData = this.segmentQuantData.bind(this);
    this.segmentQualData = this.segmentQualData.bind(this);
    this.createQualRows = this.createQualRows.bind(this);
    this.createQuantRows = this.createQuantRows.bind(this);
    this.renderQualData = this.renderQualData.bind(this);
    this.renderQuantData = this.renderQuantData.bind(this);
    this.fetchQualData = this.fetchQualData.bind(this);
    this.fetchQuantData = this.fetchQuantData.bind(this);
    this.removeCookies = this.removeCookies.bind(this);
    this.saveFavoriteIndicator = this.saveFavoriteIndicator.bind(this);
  } 

toggleCategory(category) {
  this.setState({activeCategory: category});
  console.log(this.state.activeCategory);
}

toggleCountry(e) {
  this.setState({activeCountry: e.target.value});
  console.log(this.state.activeCountry);
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
      if (polIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        quantData.pol ? quantData.pol.push(dataItem) : quantData.pol = [dataItem];
      }
      else if (econIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        quantData.econ ? quantData.econ.push(dataItem) : quantData.econ = [dataItem];
      }
      else if (socIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        quantData.soc ? quantData.soc.push(dataItem) : quantData.soc = [dataItem];
      }
      else if (geoIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        quantData.geo ? quantData.geo.push(dataItem) : quantData.geo = [dataItem];
      }
    }
  });
  this.cacheQuantData(quantData);
  this.renderQuantData(this.state.activeCountry.slice(-3));
}

  segmentQualData(qualData) {
    this.cacheQualData(qualData);
    this.renderQualData(this.state.activeCountry.slice(0, 2), qualData);
  }

  fetchQualData(countryCode) {
    this.state.qualDataCache[countryCode] ? this.renderQualData(countryCode) : this.segmentQualData(initQualScraper(countryCode));
  }

  fetchQuantData(countryCode) {
    this.state.quantDataCache[countryCode] ? this.renderQuantData(countryCode) : this.handlePromises(initQuantScraper(countryCode));
  }

  cacheQualData(qualDataToCache) {
    console.log('qual data to cache...', qualDataToCache)
    let countryCode = this.state.activeCountry.slice(0, 2);
    let updatedQualCache = Object.assign({}, this.state.qualDataCache, { [countryCode]: qualDataToCache });
    console.log('updatedQualCache', updatedQualCache)
    this.setState({
      qualDataCache: updatedQualCache
    });
    console.log('qual data cached...', this.state)
  }

  cacheQuantData(quantDataToCache) {
    let countryCode = this.state.activeCountry.slice(-3);
    let updatedQuantCache = Object.assign({}, this.state.quantDataCache, { [countryCode]: quantDataToCache });
    this.setState({
      quantDataCache: updatedQuantCache
    });
  }

  renderQualData(countryCode, qualData) {
    let qualDataToRender = this.state.qualDataCache[countryCode] || qualData;
    let qualRowsToRender = this.createQualRows(qualDataToRender);
    let newState = Object.assign({}, this.state, { activeQualRows: qualRowsToRender });
    this.setState(newState);
  }

  renderQuantData(countryCode) {
    let quantDataToRender = this.state.quantDataCache[countryCode];
    let quantRowsToRender = this.createQuantRows(quantDataToRender);
    let newState = Object.assign({}, this.state, { activeQuantRows: quantRowsToRender });
    this.setState(newState);
  }

  createQuantRows(quantData) {
    const quantDataRows = {};
    quantDataRows.pol = [];
    quantDataRows.econ = [];
    quantDataRows.soc = [];
    quantDataRows.geo = [];

    quantData.pol.map((statistic, i) => quantDataRows.pol.push(<QuantDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`quant-pol${i}`} category={'pol'} index={i} />));
    quantData.econ.map((statistic, i) => quantDataRows.econ.push(<QuantDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`quant-econ${i}`} category={'econ'}  index={i} />));
    quantData.soc.map((statistic, i) => quantDataRows.soc.push(<QuantDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`quant-soc${i}`} category={'soc'} index={i} />));
    quantData.geo.map((statistic, i) => quantDataRows.geo.push(<QuantDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`quant-geo${i}`} category={'geo'} index={i} />));

    return quantDataRows;
  }

  createQualRows(qualData) {
    const qualDataRows = {};
    qualDataRows.pol = [];
    qualDataRows.econ = [];
    qualDataRows.soc = [];
    qualDataRows.geo = [];

    qualData.pol.map((statistic, i) => qualDataRows.pol.push(<QualDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`qual-pol${i}`} category={'pol'} index={i} />));
    qualData.econ.map((statistic, i) => qualDataRows.econ.push(<QualDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`qual-econ${i}`} category={'econ'}  index={i} />));
    qualData.soc.map((statistic, i) => qualDataRows.soc.push(<QualDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`qual-soc${i}`} category={'soc'} index={i} />));
    qualData.geo.map((statistic, i) => qualDataRows.econ.push(<QualDataRow data = {statistic} saveFavoriteIndicator = {this.saveFavoriteIndicator} key={`qual-geo${i}`} category={'geo'} index={i} />));

    return qualDataRows;
  }
  
  saveFavoriteIndicator(i, type, category) {
    let indicatorIndex = i;
    let indicatorToSave;
    console.log('qualDataCache:', this.state.qualDataCache)

    type === 'qual' ? 
      indicatorToSave = this.state.qualDataCache[this.state.activeCountry.slice(0, 2)][category][indicatorIndex] :
      indicatorToSave = this.state.quantDataCache[this.state.activeCountry.slice(-3)][category][indicatorIndex];
    
    console.log('indicatorToSave', indicatorToSave)
    console.log('Adding favorite object', { username: this.state.username, name: indicatorToSave.name, value: indicatorToSave.value, country: this.state.activeCountry, year: indicatorToSave.year })
    $.post('/add-favorite', { username: this.state.username, name: indicatorToSave.name, value: indicatorToSave.value, country: this.state.activeCountry, year: indicatorToSave.year })
      .done(data => browserHistory.push('/dashboard'))
      .fail(err => { 
        console.error(err) 
        browserHistory.push('/dashboard')
      });
  }

  removeCookies() {
    document.cookie = 'username' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  render() {
    return (
      <div className='display'>
        <CountrySelector
          activeCountry = {this.state.activeCountry} 
          toggleCountry = {this.toggleCountry}
          fetchQualData = {this.fetchQualData}
          fetchQuantData = {this.fetchQuantData}
        />
        <DisplayHeaders 
          toggleCategory = {this.toggleCategory} 
          activeCategory = {this.state.activeCategory}
        />
        <DataColumn 
          qualPolDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Politics' ? this.state.activeQualRows.pol : []}
          qualEconDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Economics' ? this.state.activeQualRows.econ : []}
          qualSocDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Society' ? this.state.activeQualRows.soc : []}
          qualGeoDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Geopolitics' ? this.state.activeQualRows.geo : []} 
          quantPolDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Politics' ? this.state.activeQuantRows.pol : []}
          quantEconDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Economics' ? this.state.activeQuantRows.econ : []}
          quantSocDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Society' ? this.state.activeQuantRows.soc : []}
          quantGeoDataRows = {this.state.activeCategory === 'all' || this.state.activeCategory === 'Geopolitics' ? this.state.activeQuantRows.geo : []}      
        />
      </div>
        );
    };  

}
module.exports = Display;
