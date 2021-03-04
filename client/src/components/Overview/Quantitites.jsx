import React from 'react';
import PropTypes from 'prop-types';

const Quantities = ({ max }) => {
  let key = 0;

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
  max: 1,
};

Quantities.propTypes = {
  max: PropTypes.number,
};

export default Quantities;
