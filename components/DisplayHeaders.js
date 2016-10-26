const React = require('react');

const DisplayHeaders = ({toggleCategory, activeCategory}) => {
  const styles = {
    category: {
      fontFamily: 'Arial',
      textAlign: 'center'
    },
    quantqual: {
      fontFamily: 'Arial',
      textAlign: 'center'
    }
  }
  return (
    <div>
    <div className='DisplayHeaders'
      style = { styles.category }
      onClick={() => toggleCategory}>
      {activeCategory}
    </div>
    <div>
      <div style = {styles.quantqual}>Qualitative Data</div>
    </div>
    <hr />
    </div>
  )
}

DisplayHeaders.propTypes = {
  toggleCategory: React.PropTypes.func.isRequired,
  activeCategory: React.PropTypes.string.isRequired
}


module.exports = DisplayHeaders;