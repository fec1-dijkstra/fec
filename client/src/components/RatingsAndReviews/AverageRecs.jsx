import React from 'react';

const AverageRecs = ({ meta }) => {
  if (JSON.stringify(meta) === '{}') {
    return null;
  }
  const { recommended } = meta;
  const percentage = Math.round(
    (Number(recommended.true) / (Number(recommended.true) + Number(recommended.false))) * 100
  );
  const test = (1 / 2) * 100;
  return <div className="rec-percent">{percentage}% of reviewers recommend this product</div>;
};

export default AverageRecs;
