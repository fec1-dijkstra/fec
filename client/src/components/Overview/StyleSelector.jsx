import React from 'react';
import PropTypes from 'prop-types';

const StyleSelector = ({ productStyles }) => (
  <div>
    <div>{}</div>
    <div>Thumbnails...</div>
  </div>
);

StyleSelector.defaultProps = {
  productStyles: {},
};

StyleSelector.propTypes = {
  productStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default StyleSelector;
