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
  const percentages = [0, 0, 0, 0, 0];
  Object.keys(ratings).map((val) => {
    const calc = Math.abs((ratings[val] / total) * 300);
    if (calc > 300) {
      percentages[val - 1] = 300;
      return null;
    }
    percentages[val - 1] = calc;
    return null;
  });
  const starKeys = ['1', '2', '3', '4', '5'];
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
