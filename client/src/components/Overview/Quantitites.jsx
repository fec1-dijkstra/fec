import React from 'react';
import PropTypes from 'prop-types';

const Quantities = ({ maxQuantity }) => {
  let key = 0;
  let max = maxQuantity;
  if (max > 15) {
    max = 15;
  }

  if (max > 0) {
    const quantities = [];
    for (let i = 2; i <= max; i += 1) {
      key += 1;
      quantities.push(
        <option key={key} value={i}>
          {i}
        </option>
      );
    }
    return quantities;
  }
  return <></>;
};

Quantities.defaultProps = {
  maxQuantity: 1,
};

Quantities.propTypes = {
  maxQuantity: PropTypes.number,
};

export default Quantities;
