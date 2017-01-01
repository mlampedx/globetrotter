const React = require('react');

const QuantDataRow = ({ data, saveFavoriteIndicator, category, index }) => {

  return (
    <div>
      <span className = 'data-row'>{data.name}: {data.value} ({data.year}).</span>
      <br />
      <button className = 'btn-primary' onClick = {() => saveFavoriteIndicator(index, 'quant', category)}>Save</button>
      <hr />
    </div>
  )
}

QuantDataRow.propTypes = {
  data: React.PropTypes.object,
  saveFavoriteIndicator: React.PropTypes.func
}

module.exports = QuantDataRow;
