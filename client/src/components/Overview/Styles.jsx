import React from 'react';
import PropTypes from 'prop-types';

const urlCheck = (url) => {
  if (url) {
    const search = url.search('http');
    if (search === 0) {
      return url;
    }
    if (search > 0) {
      return url.slice(search);
    }
  }
  return null;
};

const Styles = ({ productStyles, selectedStyle, defaultStyle, handleClick }) => {
  let key = 0;
  if (productStyles.results && productStyles.results.length > 0) {
    const allStyles = productStyles.results.map((style) => {
      let checkMark = <></>;
      let defaultId = style.style_id;
      let styleClass = 'overview-style-icon';
      if (style.style_id === selectedStyle.style_id) {
        styleClass = 'overview-selected-style-icon';
        checkMark = (
          <div className="overview-checkmark-background overview-selected-checkmark-background">
            <div className="overview-checkmark" />
          </div>
        );
      }
      if (style.style_id === defaultStyle.style_id) {
        defaultId = 'overview-default-style-icon';
      }
      let styleImg = <></>;
      const checkUrl = urlCheck(style.photos[0].thumbnail_url);
      if (checkUrl) {
        styleImg = <img src={checkUrl} id={style.style_id} alt={`${style.name} style icon`} />;
      }
      key += 1;
      return (
        <div
          onClick={handleClick}
          // onMouseEnter={handleClick}
          // onFocus={handleClick}
          className={styleClass}
          value={style.style_id}
          onKeyPress={handleClick}
          tabIndex={0}
          role="button"
          key={key}
          id={defaultId}
        >
          {checkMark}
          {styleImg}
        </div>
      );
    });
    let firstStyle;
    for (let i = 0; i < allStyles.length; i += 1) {
      if (allStyles[i].props.id === 'overview-default-style-icon') {
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
