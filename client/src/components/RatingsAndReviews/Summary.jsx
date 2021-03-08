/* eslint-disable react/prop-types */
import React from 'react';

const Summary = ({ summary }) => {
  if (summary.substring(0, 60).length === summary.length) {
    return (
      <div className="summary">
        <b>{summary}</b>{' '}
      </div>
    );
  }
  return (
    <>
      <div className="summary">
        {' '}
        <b>{`${summary.substring(0, 57)}...`}</b>{' '}
      </div>
      <div className="summary-cont">{`...${summary.substring(57)}`}</div>
    </>
  );
};

export default Summary;
