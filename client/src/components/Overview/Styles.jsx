import React from 'react';
import PropTypes from 'prop-types';

const urlCheck = (url) => {
  const search = url.search('http');
  if (search === 0) {
    return url;
  }
  if (search > 0) {
    return url.slice(search);
  }
  return null;
};

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
      let styleImg = <div className="overview-broken-image" />;
      const checkUrl = urlCheck(style.photos[0].thumbnail_url);
      if (checkUrl) {
        styleImg = (
          <div
            onClick={handleClick}
            className={styleClass}
            value={style.style_id}
            onKeyPress={handleClick}
            tabIndex={0}
            role="button"
          >
            <img src={checkUrl} id={style.style_id} key={key} alt={`${style.name} style icon`} />
          </div>
        );
      }
      key += 1;
      return styleImg;
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
