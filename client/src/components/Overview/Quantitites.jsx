import React from 'react';
import PropTypes from 'prop-types';

const Quantities = ({ maxQuantity }) => {
  let key = 0;

  if (maxQuantity > 0) {
    const quantities = [];
    for (let i = 2; i <= maxQuantity; i += 1) {
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
