const React = require('react');

const QualDataRow = ({ data }) => {
  return (
    <div>
      <span className = 'data-row'>{data.name}: {data.value}.</span>
      <br />
      <button className = 'btn-primary'>Save</button>
      <hr />
    </div>
  )
}

QualDataRow.propTypes = {
  data: React.PropTypes.object
}

module.exports = QualDataRow;
