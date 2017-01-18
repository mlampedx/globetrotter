import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const DisplayHeaders = ({ toggleCategory }) => {
  return (
    <Tabs>
      <Tab
        className="all-btn"
        label="All"
        onClick={() => toggleCategory('All')}
      />
      <Tab
        className="pol-btn"
        label="Political"
        onClick={() => toggleCategory('Political')}
      />
      <Tab
        className="econ-btn"
        label="Economic"
        onClick={() => toggleCategory('Economic')}
      />
      <Tab
        className="soc-btn"
        label="Societal"
        onClick={() => toggleCategory('Societal')}
      />
      <Tab
        className="geo-btn"
        label="Geopolitical"
        onClick={() => toggleCategory('Geopolitical')}
      />
      
    </Tabs>
  );
};

DisplayHeaders.propTypes = {
  toggleCategory: React.PropTypes.func.isRequired,
};


module.exports = DisplayHeaders;
