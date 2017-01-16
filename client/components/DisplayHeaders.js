const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const DisplayHeaders = ({toggleCategory, activeCategory}) => {
  return (
    <Tabs>
      <Tab
        className = 'all-btn'
        label = 'All'
        onClick = {() => toggleCategory('All')}
      />
      <Tab
        className = 'pol-btn'
        label = 'Political'
        onClick = {() => toggleCategory('Political')}
      />
      <Tab
        className = 'econ-btn'
        label = 'Economic'
        onClick = {() => toggleCategory('Economic')}
      />
      <Tab
        className = 'soc-btn'
        label = 'Societal'
        onClick = {() => toggleCategory('Societal')}
      />
      <Tab
        className = 'geo-btn'
        label = 'Geopolitical'
        onClick = {() => toggleCategory('Geopolitical')}
      />
      
    </Tabs>
  )
}

DisplayHeaders.propTypes = {
  toggleCategory: React.PropTypes.func.isRequired,
  activeCategory: React.PropTypes.string.isRequired
}


module.exports = DisplayHeaders;