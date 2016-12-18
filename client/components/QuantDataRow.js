const React = require('react');

const QuantDataRow = ({ data }) => {
  const styles = {
    row: {
      color: 'white',
      fontFamily: 'Arial'
    }
  }
  return (
    <div>
      <span className = 'DataRow' style = { styles.row } >{data.name}: {data.value} ({data.year}).</span>
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
