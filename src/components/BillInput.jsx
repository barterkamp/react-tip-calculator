import React from 'react';

function BillInput({ bill, setBill }) {
  const handleInputChange = (event) => {
    const billValue = event.target.value;
    if (billValue < 0) {
      setBill('0'); // avoids negative numbers in input
    } else setBill(billValue);
  };
  return (
    <form className="mb-8">
      <p className="mb-2">
        <label htmlFor="bill-input" className="text-base text-darkGray font-spaceMono">
          Bill
        </label>
      </p>
      <input
        className="bg-lighterGray text-2xl placeholder-lightGray text-darkGreen font-spaceMono text-right w-full block rounded-md px-4 py-2 focus:outline-mediumGreen"
        id="bill-input"
        type="number"
        value={bill}
        onChange={handleInputChange}
        placeholder="0"
      />
    </form>
  );
}

export default BillInput;
