const React = require('react');

const FavoriteDataRow = ({ data, deleteFavoriteIndicator, index }) => {
  let year;
  data.year ? year = ` (${data.year}).` : ' .';

  return (
    <div>
      <span className = 'data-row'>{data.country} - {data.name}: {data.value}{year}</span>
      <br />
      <button className = 'btn-primary' onClick = {() => deleteFavoriteIndicator(index)}>Delete</button>
      <hr />
    </div>
  )
}

FavoriteDataRow.propTypes = {
  data: React.PropTypes.object,
  deleteFavoriteIndicator: React.PropTypes.func
}

module.exports = FavoriteDataRow;
