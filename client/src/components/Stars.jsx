import React from 'react';
// percentage example: 84
const Stars = function ({ percentage }) {
  const divStyle = {
    width: `${percentage}%`,
  };
  return (
    <div className="star-ratings-css">
      <div className="star-ratings-css-top" style={divStyle}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="star-ratings-css-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};

export default Stars;
