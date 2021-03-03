/* eslint-disable react/prop-types */
import React from 'react';

const Response = ({ response }) => {
  if (response) {
    return <div className="response">{response}</div>;
  }
  return null;
};

export default Response;
