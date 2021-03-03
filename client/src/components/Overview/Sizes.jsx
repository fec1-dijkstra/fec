import React from 'react';
import PropTypes from 'prop-types';

const Sizes = ({ allSizes }) => {
  let key = 0;
  if (allSizes && allSizes.length > 0) {
    return allSizes.map((size) => {
      key += 1;
      return (
        <option key={key} value={size}>
          {size}
        </option>
      );
    });
  }
  return <></>;
};

Sizes.defaultProps = {
  allSizes: [],
};

Sizes.propTypes = {
  allSizes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Sizes;
