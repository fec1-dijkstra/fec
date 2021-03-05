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
  const percentages = Object.values(ratings).map((val) => (val / total) * 2);
  const starKeys = Object.keys(meta.ratings);
  const starRatings = starKeys.map((stars, index) => (
    <div key={`bar-${stars}`}>
      <div className="bar-background" key={`${stars}-star-background`} />
      <div
        className="star-bar"
        key={`${stars}-stars`}
        styles={{ length: `${percentages[index]}%` }}
      />
    </div>
  ));
  return <div className="bars-container">{starRatings}</div>;
};

export default DisplayBars;
