import React from 'react';

function Output({ tipAmount, totalAmount }) {
  return (
    <div>
      <p>{tipAmount}</p>
      <p>{totalAmount}</p>
    </div>
  );
}

export default Output;
