const React = require('react');
const QualDataRow = require('./QualDataRow');
const QuantDataRow = require('./QuantDataRow');

const DataColumn = ({ qualPolDataRows, qualEconDataRows, qualSocDataRows, qualGeoDataRows, quantPolDataRows, quantEconDataRows, quantSocDataRows, quantGeoDataRows }) => {
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
      <div className='DataColumn' style = { styles.col }>{ quantPolDataRows }</div>
      <div className='DataColumn' style = { styles.col }>{ quantEconDataRows }</div>
      <div className='DataColumn' style = { styles.col }>{ quantSocDataRows }</div>
      <div className='DataColumn' style = { styles.col }>{ quantGeoDataRows }</div>
    </div>
  )
}

module.exports = DataColumn;
