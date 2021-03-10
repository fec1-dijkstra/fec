import React from 'react';

const AverageRecs = ({ meta }) => {
<<<<<<< HEAD
=======
  // debugger;
>>>>>>> c75fcfebcfd4f12954e8776c86ea1c6fbcf8b7d6
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
