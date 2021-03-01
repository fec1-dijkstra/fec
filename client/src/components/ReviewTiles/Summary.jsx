/* eslint-disable react/prop-types */
import React from 'react';

const Summary = ({ summary }) => {
  if (summary.substring(0, 60).length === summary.length) {
    return <div className="summary">{summary} </div>;
  }
  return (
    <>
      <div className="summary"> {`${summary.substring(0, 57)}...`}</div>
      <div className="summary-cont">{`...${summary.substring(57)}`}</div>
    </>
  );
};

export default Summary;
