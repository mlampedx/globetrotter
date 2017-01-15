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
  )
}

DisplayHeaders.propTypes = {
  toggleCategory: React.PropTypes.func.isRequired,
  activeCategory: React.PropTypes.string.isRequired
}


module.exports = DisplayHeaders;