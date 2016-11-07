const React = require('react');

const DisplayHeaders = ({toggleCategory, activeCategory}) => {
  const styles = {
    category: {
      pol: {
        backgroundColor: 'blue',
        display: 'inline',
        fontFamily: 'Arial',
        fontSize: '20px',
        height: '50px',
        margin: '50px 120px 50px 120px',
        width: '200px',
        textAlign: 'center'
      },
      econ: {
        backgroundColor: 'green',
        display: 'inline',
        fontFamily: 'Arial',
        fontSize: '20px',
        height: '50px',
        margin: '50px 120px 50px 120px',
        width: '200px',
        textAlign: 'center'
      },
      soc: {
        backgroundColor: 'red',
        display: 'inline',
        fontFamily: 'Arial',
        fontSize: '20px',
        height: '50px',
        margin: '50px 120px 50px 120px',
        width: '200px',
        textAlign: 'center'
      },
      geo: {
        backgroundColor: 'purple',
        display: 'inline',
        fontFamily: 'Arial',
        fontSize: '20px',
        height: '50px',
        margin: '50px 120px 50px 120px',
        width: '200px',
        textAlign: 'center'
      }
    },
    quantqual: {
      fontFamily: 'Arial',
      textAlign: 'center'
    }
  }
  return (
    <div>
      <span>
        <button 
          className='DisplayHeaders'
          onClick = {() => toggleCategory('Politics')}
          style={styles.category.pol}>
          Politics
        </button>
        <button 
          className='DisplayHeaders' 
          onClick = {() => toggleCategory('Economics')}
          style={styles.category.econ}>
          Economics
        </button>
        <button 
          className='DisplayHeaders' 
          onClick = {() => toggleCategory('Society')}
          style={styles.category.soc}>
          Society
        </button>
        <button 
          className='DisplayHeaders'
          onClick = {() => toggleCategory('Geopolitics')} 
          style={styles.category.geo}>
          Geopolitics
        </button>
      </span>
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