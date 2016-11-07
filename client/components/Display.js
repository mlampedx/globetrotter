const React = require('react');
const ReactDOM = require('react-dom');
const DisplayHeaders = require('./DisplayHeaders');
const CountrySelector = require('./CountrySelector');
const DataColumn = require('./DataColumn');
const DataRow = require('./DataRow');
const { initScraper } = require('./../../server/scrape-controller');


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: 'us',
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

    for (let i = 0; i < data.Pol.length; i++) {
      qualPolDataRows.push(<DataRow data = {data.Pol[i]} key={i} />)
    }

    for (let i = 0; i < data.Econ.length; i++) {
      qualEconDataRows.push(<DataRow data = {data.Econ[i]} key={i} />)
    }

    for (let i = 0; i < data.Soc.length; i++) {
      qualSocDataRows.push(<DataRow data = {data.Soc[i]} key={i} />)
    }

    for (let i = 0; i < data.Geo.length; i++) {
      qualGeoDataRows.push(<DataRow data = {data.Geo[i]} key={i} />)
    } 

    let newState = {};
    Object.assign(newState, this.state);
    newState.activeCategory = 'all';
    newState.qualCountryData.Pol = qualPolDataRows;
    newState.qualCountryData.Econ = qualEconDataRows;
    newState.qualCountryData.Soc = qualSocDataRows;
    newState.qualCountryData.Geo = qualGeoDataRows;
    this.setState({newState});
    console.log(this.state.qualCountryData)
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
      }
    }

    return (
      <div className='Display' style = {styles.container}>
        <CountrySelector
          activeCountry={this.state.activeCountry} 
          toggleCountry={this.toggleCountry} 
          segmentQualData={this.segmentQualData} 
          initScraper={initScraper}
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