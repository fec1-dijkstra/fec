import React from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';

const Styles = ({ productStyles, selectedStyle, handleClick }) => {
  let key = 0;
  if (productStyles.results && productStyles.results.length > 0) {
    return productStyles.results.map((style) => {
      let styleClass = 'style-icon';
      if (style.style_id === selectedStyle.style_id) {
        styleClass = 'selected-style-icon';
      }
      key += 1;
      return (
        <option key={key} value={style.style_id} className={styleClass} onClick={handleClick}>
          {style.name}
        </option>
      );
    });
  }
  return <></>;
};

Styles.defaultProps = {
  productStyles: {},
  selectedStyle: {},
  handleClick: (event) => event,
};

Styles.propTypes = {
  productStyles: PropTypes.oneOfType([PropTypes.object]),
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  handleClick: PropTypes.func,
};

export default Styles;
