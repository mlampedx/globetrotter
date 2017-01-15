const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const DisplayHeaders = ({toggleCategory, activeCategory}) => {
  return (
    <Tabs>
      <Tab
        className = 'pol-btn'
        label = 'Politics'
        onClick = {() => toggleCategory('Politics')}
      />
      <Tab
        className = 'econ-btn'
        label = 'Economics'
        onClick = {() => toggleCategory('Economics')}
      />
      <Tab
        className = 'soc-btn'
        label = 'Society'
        onClick = {() => toggleCategory('Society')}
      />
      <Tab
        className = 'geo-btn'
        label = 'Geopolitics'
        onClick = {() => toggleCategory('Geopolitics')}
      />
      
    </Tabs>

    // <div>
    //   <span>
    //     <FlatButton 
    //       className='pol-btn'
    //       onClick = {() => toggleCategory('Politics')}
    //       label = 'Politics'
    //     />
    //     <FlatButton 
    //       className='econ-btn' 
    //       onClick = {() => toggleCategory('Economics')}
    //       label = 'Economics'
    //     />
    //     <FlatButton 
    //       className='soc-btn' 
    //       onClick = {() => toggleCategory('Society')}
    //       label = 'Society'
    //     />
    //     <FlatButton 
    //       className='geo-btn'
    //       onClick = {() => toggleCategory('Geopolitics')}
    //       label = 'Geopolitics'
    //     />
    //   </span>
    // <div>
    //   <div className='data-label'>Qualitative Data</div>
    // </div>
    // <hr />
    // </div>
  )
}

DisplayHeaders.propTypes = {
  toggleCategory: React.PropTypes.func.isRequired,
  activeCategory: React.PropTypes.string.isRequired
}


module.exports = DisplayHeaders;