import React from 'react';
import PropTypes from 'prop-types';

const BodySection = ({ title, children }) => {
  return (
    <div className='bodySection'>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
  title: PropTypes.string
};

BodySection.defaultProps = {
  title: ''
};

export default BodySection;
