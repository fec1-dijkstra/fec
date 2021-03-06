import React from 'react';

const DisplayBars = ({ meta }) => {
  if (JSON.stringify(meta) === '{}' || !meta) {
    return null;
  }
  let total = 0;
  const { ratings } = meta;
  Object.values(ratings).map((num) => {
    total += Number(num);
    return null;
  });
  const percentages = Object.values(ratings).map((val) => {
    const calc = Math.abs((val / total) * 300);
    if (calc > 300) {
      return 300;
    }
    return calc;
  });
  const starKeys = Object.keys(meta.ratings);
  const starRatings = starKeys.map((stars, index) => (
    <div className="bar-container" key={`bar-${stars}`}>
      <span className="bar-text">{stars}</span>
      <div className="bar-background" key={`${stars}-star-background`} />
      <div
        className="star-bar"
        key={`${stars}-stars`}
        style={{ width: `${percentages[index]}px` }}
      />
    </div>
  ));
  return <div className="bars-container">{starRatings}</div>;
};

export default DisplayBars;
