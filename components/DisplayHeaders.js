const React = require('react');

const DisplayHeaders = ({toggleCategory, activeCategory}) => {
  const styles = {
    category: {
      background: 'blue',
      fontFamily: 'Arial'
    },
    quantqual: {
      fontFamily: 'Arial',
      width: '50%'
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
      <div style = {styles.quantqual}>Quantitative Data</div>
    </div>
    </div>
  )
}

DisplayHeaders.propTypes = {
  toggleCategory: React.PropTypes.func.isRequired,
  activeCategory: React.PropTypes.string.isRequired
}


module.exports = DisplayHeaders;