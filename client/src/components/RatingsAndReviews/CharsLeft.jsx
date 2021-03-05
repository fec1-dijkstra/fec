import React from 'react';

const CharsLeft = ({ chars }) => {
  if (chars > 0) {
    return <div className="chars-left">Minimum required characters left:{chars}</div>;
  }
  return <div className="chars-left">Minimum reached</div>;
};

export default CharsLeft;
