import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link, browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
// import Paper from 'material-ui/Paper';
import { TableRow, TableRowColumn} from 'material-ui/Table';
import { 
  initQualScraper,
  initQuantScraper, 
  polIndicators, 
  socIndicators, 
  econIndicators, 
  geoIndicators,
  parseQuantValue } from './../utils';
import {
  DisplayHeaders,
  CountrySelector,
  DataDashboard
} from './index';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: 'us-usa',
      activeCategory: 'All',
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
    this.createDataRows = this.createDataRows.bind(this);
    this.createDataRow = this.createDataRow.bind(this);
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
    if (json[1] && json[1][0].value) {
      let dataItem = { 
        indicator: json[1][0].indicator.id,
        name: json[1][0].indicator.value,
        value: parseQuantValue(json[1][0].indicator.value, json[1][0].value),
        year: json[1][0].date,
        country: json[1][0].country.value,
        type: 'Quantitative',
      };
      if (polIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        dataItem.category = 'Political';
        quantData.pol ? quantData.pol.push(dataItem) : quantData.pol = [dataItem];
      }
      else if (econIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        dataItem.category = 'Economic';
        quantData.econ ? quantData.econ.push(dataItem) : quantData.econ = [dataItem];
      }
      else if (socIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        dataItem.category = 'Societal';
        quantData.soc ? quantData.soc.push(dataItem) : quantData.soc = [dataItem];
      }
      else if (geoIndicators.includes(dataItem.indicator) && dataItem.value !== null) {
        dataItem.category = 'Geopolitical';
        quantData.geo ? quantData.geo.push(dataItem) : quantData.geo = [dataItem];
      }
    }
  });
  this.cacheQuantData(quantData);
  this.renderQuantData(this.state.activeCountry.slice(-3));
}

  segmentQualData(qualData) {
    this.cacheQualData(qualData);
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
    }, this.renderQualData(this.state.activeCountry.slice(0, 2), qualDataToCache));
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
    let qualRowsToRender = this.createDataRows(qualDataToRender);
    let newState = Object.assign({}, this.state, { activeQualRows: qualRowsToRender });
    this.setState(newState);
  }

  renderQuantData(countryCode) {
    let quantDataToRender = this.state.quantDataCache[countryCode];
    let quantRowsToRender = this.createDataRows(quantDataToRender);
    let newState = Object.assign({}, this.state, { activeQuantRows: quantRowsToRender });
    this.setState(newState);
  }

  createDataRows(data) {
    const dataRows = {};
      dataRows.pol = data.pol.map((statistic, i) => { 
        return this.createDataRow(statistic, i);
      });  
      dataRows.econ = data.econ.map((statistic, i) => {
        return this.createDataRow(statistic, i);
      });
      dataRows.soc = data.soc.map((statistic, i) => {
        return this.createDataRow(statistic, i);
      });
      dataRows.geo = data.geo.map((statistic, i) => {
        return this.createDataRow(statistic, i);
      });

    return dataRows;
  }
  
  createDataRow(statistic, index) {
    const { type, category, name, value = 'No data available', year = 2016 } = statistic;

    return (
      <TableRow key = {`${type}-${category.slice(3)}-R${index}`} index = { index }>
        <TableRowColumn key = { `${this.activeCountry}${this.activeCategory}${index}` }>{ category }</TableRowColumn>
        <TableRowColumn key = { `${this.activeCountry}${this.activeCategory}${name}` }>{ name }</TableRowColumn>
        <TableRowColumn key = { `${this.activeCountry}${this.activeCategory}${value.slice(0, 5)}` }>{ value }</TableRowColumn>
        <TableRowColumn key = { `${this.activeCountry}${this.activeCategory}${year}` }>{ year }</TableRowColumn>
        <TableRowColumn key = { `${this.activeCountry}${this.activeCategory}${index}fav`}>
          <FlatButton label = 'Favorite' primary = { true } onClick = {() => this.saveFavoriteIndicator(index, type, category) } />
        </TableRowColumn>
      </TableRow>
    )
  }

  saveFavoriteIndicator(i, type, category) {
    const categoryMap = {
      'Political': 'pol',
      'Economic': 'econ',
      'Societal': 'soc',
      'Geopolitical': 'geo',
    }

    let indicatorToSave;

    type === 'Qualitative' ? 
      indicatorToSave = this.state.qualDataCache[this.state.activeCountry.slice(0, 2)][categoryMap[category]][i] :
      indicatorToSave = this.state.quantDataCache[this.state.activeCountry.slice(-3)][categoryMap[category]][i];
    
    console.log('indicatorToSave', indicatorToSave)
    console.log('Adding favorite object', { username: this.state.username, name: indicatorToSave.name, value: indicatorToSave.value, country: indicatorToSave.country, year: indicatorToSave.year, type: indicatorToSave.type, category: indicatorToSave.category })
    $.post('/add-favorite', { username: this.state.username, name: indicatorToSave.name, value: indicatorToSave.value, country: indicatorToSave.country, year: indicatorToSave.year, type: indicatorToSave.type, category: indicatorToSave.category })
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
        <DataDashboard
          qualPolDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Political' ? this.state.activeQualRows.pol : []}
          qualEconDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Economic' ? this.state.activeQualRows.econ : []}
          qualSocDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Societal' ? this.state.activeQualRows.soc : []}
          qualGeoDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Geopolitical' ? this.state.activeQualRows.geo : []} 
          quantPolDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Political' ? this.state.activeQuantRows.pol : []}
          quantEconDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Economic' ? this.state.activeQuantRows.econ : []}
          quantSocDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Societal' ? this.state.activeQuantRows.soc : []}
          quantGeoDataRows = {this.state.activeCategory === 'All' || this.state.activeCategory === 'Geopolitical' ? this.state.activeQuantRows.geo : []}      
        />
      </div>
        );
    };  

}
module.exports = Display;
