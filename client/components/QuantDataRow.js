const React = require('react');

const QuantDataRow = ({ data }) => {
  return (
    <div>
      <span className = 'data-row'>{data.name}: {data.value} ({data.year}).</span>
      <br />
      <button className = 'btn-primary'>Save</button>
      <hr />
    </div>
  )
}

QuantDataRow.propTypes = {
  data: React.PropTypes.object
}

module.exports = QuantDataRow;
