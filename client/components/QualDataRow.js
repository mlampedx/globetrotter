const React = require('react');

const QualDataRow = ({ data, saveFavoriteIndicator, category, index }) => {

  return (
    <div>
      <span className = 'data-row'>{data.name}: {data.value}.</span>
      <br />
      <button className = 'btn-primary' onClick = {() => saveFavoriteIndicator(index, 'qual', category)}>Save</button>
      <hr />
    </div>
  )
}

QualDataRow.propTypes = {
  data: React.PropTypes.object,
  saveFavoriteIndicator: React.PropTypes.func
}

module.exports = QualDataRow;
