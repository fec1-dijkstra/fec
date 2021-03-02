/* eslint-disable react/prop-types */
import React from 'react';

const Recommends = ({ recommendation }) => {
  if (recommendation) {
    return <div className="recommends">&#10003; I recommend this product</div>;
  }
  return null;
};

export default Recommends;
