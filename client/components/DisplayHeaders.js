const React = require('react');

const DisplayHeaders = ({toggleCategory, activeCategory}) => {
  return (
    <div>
      <span>
        <button 
          className='pol-btn'
          onClick = {() => toggleCategory('Politics')}>
          Politics
        </button>
        <button 
          className='econ-btn' 
          onClick = {() => toggleCategory('Economics')}>
          Economics
        </button>
        <button 
          className='soc-btn' 
          onClick = {() => toggleCategory('Society')}>
          Society
        </button>
        <button 
          className='geo-btn'
          onClick = {() => toggleCategory('Geopolitics')}>
          Geopolitics
        </button>
      </span>
    <div>
      <div className='data-label'>Qualitative Data</div>
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