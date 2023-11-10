import React from 'react';

function Output({ tipAmount, totalAmount }) {
  return (
    <div className="bg-darkGreen rounded-2xl pt-10 px-6 pb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-white text-base font-spaceMono">Tip amount</p>
          <span className="block text-sm text-lightGray font-spaceMono">/ person</span>
        </div>
        <div>
          <p className="text-3xl text-mediumGreen font-spaceMono">${tipAmount}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-white text-base font-spaceMono">Tip amount</p>
          <span className="block text-sm text-lightGray font-spaceMono">/ person</span>
        </div>
        <div>
          <p className="text-3xl text-mediumGreen font-spaceMono">${totalAmount}</p>
        </div>
      </div>
      <button className="bg-mediumGreen text-center font-spaceMono text-xl text-darkGreen uppercase w-full py-2.5 rounded-md">
        reset
      </button>
    </div>
  );
}

export default Output;
