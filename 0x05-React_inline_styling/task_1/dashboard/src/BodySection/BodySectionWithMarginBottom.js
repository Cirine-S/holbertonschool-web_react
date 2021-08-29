import React from 'react';
import PropTypes from 'prop-types';

import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className='bodySectionWithMargin'>
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
};

BodySectionWithMarginBottom.defaultProps = {
  title: ''
};

export default BodySectionWithMarginBottom;
