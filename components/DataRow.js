const React = require('react');

const DataRow = ({ data }) => {
  const styles = {
    row: {
      fontFamily: 'Arial'
    }
  }
  return (
    <div>
      <span className = 'DataRow' style = { styles.row } >{data.name}: {data.value}.</span>
      <br />
      <button>Save</button>
      <hr />
    </div>
  )
}

DataRow.propTypes = {
  data: React.PropTypes.object
}

module.exports = DataRow;