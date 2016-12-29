const React = require('react');
const QualDataRow = require('./QualDataRow');
const QuantDataRow = require('./QuantDataRow');

const DataColumn = ({ qualPolDataRows, qualEconDataRows, qualSocDataRows, qualGeoDataRows, quantPolDataRows, quantEconDataRows, quantSocDataRows, quantGeoDataRows }) => {
  return (
    <div className='outer-div'>
      <div className='data-column'>{ qualPolDataRows }</div>
      <div className='data-column'>{ qualEconDataRows }</div>
      <div className='data-column'>{ qualSocDataRows }</div>
      <div className='data-column'>{ qualGeoDataRows }</div>
      <div className='data-column'>{ quantPolDataRows }</div>
      <div className='data-column'>{ quantEconDataRows }</div>
      <div className='data-column'>{ quantSocDataRows }</div>
      <div className='data-column'>{ quantGeoDataRows }</div>
    </div>
  )
}

module.exports = DataColumn;
