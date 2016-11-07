const React = require('react');
const DataRow = require('./DataRow');

const DataColumn = ({ qualPolDataRows, qualEconDataRows, qualSocDataRows, qualGeoDataRows }) => {
  const styles = {
    outerDiv: {
      display: 'grid'
    },
    col: {
      width: '100%'
    }
  }
  return (
    <div style = {styles.outerDiv}>
      <div className='DataColumn' style = { styles.col }>{ qualPolDataRows }</div>
      <div className='DataColumn' style = { styles.col }>{ qualEconDataRows }</div>
      <div className='DataColumn' style = { styles.col }>{ qualSocDataRows }</div>
      <div className='DataColumn' style = { styles.col }>{ qualGeoDataRows }</div>
    </div>
  )
}

// DataColumn.propTypes = {
//   qualPolDataRows: React.PropTypes.array.isRequired,
//   qualEconDataRows: React.PropTypes.array.isRequired,
//   qualSocDataRows: React.PropTypes.array.isRequired,
//   qualGeoDataRows: React.PropTypes.array.isRequired
// }

module.exports = DataColumn;

      // <div className='DataColumn' id = 'col2' qualEconData = {this.props.qualCountryData[1]} />
      // <div className='DataColumn' id = 'col3' qualSocData = {this.props.qualCountryData[2]} />
      // <div className='DataColumn' id = 'col4' qualGeoData = {this.props.qualCountryData[3]} />