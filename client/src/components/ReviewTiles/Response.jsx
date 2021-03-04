/* eslint-disable react/prop-types */
import React from 'react';

const Response = ({ response }) => {
  if (response) {
<<<<<<< HEAD
    return (
      <div className="response">
        <i>{response}</i>
      </div>
    );
=======
    return <div className="response">{response}</div>;
>>>>>>> eed5345b28c12b44b5f20bec9d3ee907ffa05f9c
  }
  return null;
};

export default Response;
