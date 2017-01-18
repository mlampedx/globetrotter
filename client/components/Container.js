import React, { PropTypes } from 'react';
import Nav from './Nav';

const Container = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Container;
