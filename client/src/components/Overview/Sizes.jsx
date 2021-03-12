import React from 'react';
import PropTypes from 'prop-types';

const Sizes = ({ allSizes }) => {
  let key = 0;
  if (allSizes.sizes && allSizes.sizes.length > 0) {
    return allSizes.sizes.map((size) => {
      key += 1;
      return (
        <option onClick={(e) => (e.target.size = '0')} key={key} value={size}>
          {size}
        </option>
      );
    });
  }
  return <></>;
};

Sizes.defaultProps = {
  allSizes: {},
};

Sizes.propTypes = {
  allSizes: PropTypes.oneOfType([PropTypes.object]),
};

export default Sizes;
