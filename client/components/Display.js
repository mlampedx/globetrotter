const React = require('react');
const ReactDOM = require('react-dom');
const DisplayHeaders = require('./DisplayHeaders');
const CountrySelector = require('./CountrySelector');
const DataColumn = require('./DataColumn');
const DataRow = require('./DataRow');
const { initScraper, scrapeController } = require('./../../server/scrape-controller');


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: 'us',
      activeCategory: 'Politics, Economics, Society and Geopolitics',
      qualCountryData: []
    }
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.segmentQualData = this.segmentQualData.bind(this);
  } 

  // componentDidMount() {

  //   // Console.log result and examine data to determine what is needed
  //   $.get(this.props.feedUrl, function (result) {
  //     this.setState({
  //       urls: result
  //     })
  //   }.bind(this))
  // }

toggleCategory() {
    const categories = [Politics, Economics, Society, Geopolitics];
    let i = 0;

    if (i < 3) {
      i++;
    }

    else if (i === 3) {
      i = 0;
    }

   let newState = {};
   Object.assign(newState, this.state);
   newState.activeCategory = categories[i];
   this.setState({newState});
}

toggleCountry(e) {
  this.setState({activeCountry: e.target.value, qualCountryData: []}, () => console.log(this.activeCountry));
  console.log(this.state.activeCountry)
}

segmentQualData(data) {
  let qualPolDataRows = [];
  let qualEconDataRows = [];
  let qualSocDataRows = [];
  let qualGeoDataRows = [];

    for (let i = 0; i < 7; i++) {
      qualPolDataRows.push(<DataRow data = {data[i]} key={i} />)
    }

    for (let i = 7; i < 15; i++) {
      qualEconDataRows.push(<DataRow data = {data[i]} key={i} />)
    }

    for (let i = 15; i < 18; i++) {
      qualSocDataRows.push(<DataRow data = {data[i]} key={i} />)
    }

    for (let i = 18; i < 25; i++) {
      qualGeoDataRows.push(<DataRow data = {data[i]} key={i} />)
    } 

    let newState = {};
    Object.assign(newState, this.state);
    newState.qualCountryData.push(qualPolDataRows);
    newState.qualCountryData.push(qualEconDataRows);
    newState.qualCountryData.push(qualSocDataRows);
    newState.qualCountryData.push(qualGeoDataRows);
    this.setState({newState});
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
          qualDataRows = {this.state.qualCountryData[0]}
        />
        <DataColumn
          qualDataRows = {this.state.qualCountryData[1]}
        />
        <DataColumn
          qualDataRows = {this.state.qualCountryData[2]}
        />
        <DataColumn
          qualDataRows = {this.state.qualCountryData[3]}
        />
      </div>
        );
    };  
}

module.exports = Display;
