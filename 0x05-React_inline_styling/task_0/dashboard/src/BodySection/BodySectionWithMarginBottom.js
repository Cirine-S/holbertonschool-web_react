import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import BodySection from './BodySection';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.margin)}>
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


const styles = StyleSheet.create({
  margin: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom;
