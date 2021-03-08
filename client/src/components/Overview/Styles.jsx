import React from 'react';
import PropTypes from 'prop-types';

const Styles = ({ productStyles, selectedStyle, defaultStyle, handleClick }) => {
  let key = 0;
  if (productStyles.results && productStyles.results.length > 0) {
    const allStyles = productStyles.results.map((style) => {
      const defaultClass = ' overview-default-style-icon';
      let styleClass = 'overview-style-icon';
      if (style.style_id === selectedStyle.style_id) {
        styleClass = 'overview-selected-style-icon';
      }
      if (style.style_id === defaultStyle.style_id) {
        styleClass += defaultClass;
      }
      key += 1;
      return (
        <div
          onClick={handleClick}
          className={styleClass}
          value={style.style_id}
          onKeyPress={handleClick}
          tabIndex={0}
          role="button"
        >
          <img
            src={style.photos[0].thumbnail_url}
            id={style.style_id}
            key={key}
            alt={`${style.name} style icon`}
          />
        </div>
      );
    });
    let firstStyle;
    for (let i = 0; i < allStyles.length; i++) {
      if (allStyles[i].props.className === 'overview-default-style-icon') {
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
  defaultStyle: {},
  handleClick: (event) => event,
};

Styles.propTypes = {
  productStyles: PropTypes.oneOfType([PropTypes.object]),
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  defaultStyle: PropTypes.oneOfType([PropTypes.object]),
  handleClick: PropTypes.func,
};

export default Styles;
