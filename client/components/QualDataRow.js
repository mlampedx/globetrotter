const React = require('react');

const QualDataRow = ({ data }) => {
  const styles = {
    row: {
      color: 'white',
      fontFamily: 'Arial'
    }
  }
  return (
    <div>
      <span className = 'DataRow' style = { styles.row } >{data.name}: {data.value}.</span>
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
