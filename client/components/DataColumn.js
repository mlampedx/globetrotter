const React = require('react');
const DataRow = require('./DataRow');

const DataColumn = ({ qualDataRows }) => {
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
      <div className='DataColumn' style = { styles.col }>{ qualDataRows }</div>
    </div>
  )
}

DataColumn.propTypes = {
  qualDataRows: React.PropTypes.array.isRequired
}

module.exports = DataColumn;

      // <div className='DataColumn' id = 'col2' qualEconData = {this.props.qualCountryData[1]} />
      // <div className='DataColumn' id = 'col3' qualSocData = {this.props.qualCountryData[2]} />
      // <div className='DataColumn' id = 'col4' qualGeoData = {this.props.qualCountryData[3]} />