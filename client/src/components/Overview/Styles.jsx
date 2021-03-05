import React from 'react';
import PropTypes from 'prop-types';

const Styles = ({ productStyles, selectedStyle, handleClick }) => {
  let key = 0;
  if (productStyles.results && productStyles.results.length > 0) {
    const allStyles = productStyles.results.map((style) => {
      let styleClass = 'overview-style-icon';
      if (style.style_id === selectedStyle.style_id) {
        styleClass = 'overview-selected-style-icon';
      }
      key += 1;
      return (
        <option key={key} value={style.style_id} className={styleClass} onClick={handleClick}>
          {style.name}
        </option>
      );
    });
    let firstStyle;
    for (let i = 0; i < allStyles.length; i++) {
      if (allStyles[i].props.className === 'overview-selected-style-icon') {
        firstStyle = allStyles[i];
        allStyles.splice(i, 1);
      }
    }
    return [firstStyle, ...allStyles];
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
