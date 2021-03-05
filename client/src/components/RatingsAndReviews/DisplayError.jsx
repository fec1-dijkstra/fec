import React from 'react';

const DisplayError = ({ error }) => {
  if (error.length > 0) {
    return <div className="error">{error.toLowerCase()}</div>;
  }
  return null;
};

export default DisplayError;
