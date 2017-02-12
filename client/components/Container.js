import React, { PropTypes } from 'react';
import Nav from './Nav';

const Container = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

Container.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Container;
