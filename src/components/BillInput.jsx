import React from 'react';
import euroIcon from '../assets/images/icon-euro.svg';

function BillInput({ bill, setBill }) {
  const handleInputChange = (event) => {
    const billValue = event.target.value;
    if (billValue < 0) {
      setBill('0'); // avoids negative numbers in input
    } else setBill(billValue);
  };
  return (
    <form className="mb-8">
      <p className="mb-2 ">
        <label htmlFor="bill-input" className="text-base text-darkGray font-spaceMono">
          Bill
        </label>
      </p>
      <p className="relative">
        <input
          className="bg-lighterGray border-2 border-lighterGray text-2xl placeholder-lightGray text-darkGreen font-spaceMono text-right w-full block rounded-md px-4 py-2 focus:outline-mediumGreen"
          id="bill-input"
          type="number"
          value={bill}
          onChange={handleInputChange}
          placeholder="0"
        />
        <img className="absolute top-1/2 -translate-y-1/2 left-4 block" src={euroIcon} alt="" />
      </p>
    </form>
  );
}

export default BillInput;
