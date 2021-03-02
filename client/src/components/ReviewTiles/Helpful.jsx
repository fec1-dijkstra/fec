/* eslint-disable react/prop-types */
import React from 'react';

const Helpful = ({ helpfulness }) => (
  <div className="helpfulness">
    Helpful? <u>Yes</u> <u>{helpfulness}</u> | <u>Report</u>
  </div>
);

export default Helpful;
