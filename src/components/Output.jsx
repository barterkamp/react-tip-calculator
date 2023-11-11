import React from 'react';

function Output({
  tipAmount,
  totalAmount,
  setSelectedButtonId,
  reset,
  setReset,
  setBill,
  setNumPeople,
  setCustom,
  setError,
}) {
  const handleReset = () => {
    setReset(false);
    setBill('');
    setNumPeople('');
    setCustom('');
    setError(false);
    setSelectedButtonId(null);
  };

  return (
    <div className="flex flex-col bg-darkGreen rounded-2xl pt-10 px-6 pb-6 md:min-h-full md:p-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-white text-base font-spaceMono">Tip amount</p>
          <span className="block text-sm text-lightGray font-spaceMono">/ person</span>
        </div>
        <div>
          <p className="text-3xl text-mediumGreen font-spaceMono md:text-5xl">€{tipAmount}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-white text-base font-spaceMono">Total amount</p>
          <span className="block text-sm text-lightGray font-spaceMono">/ person</span>
        </div>
        <div>
          <p className="text-3xl text-mediumGreen font-spaceMono md:text-5xl">€{totalAmount}</p>
        </div>
      </div>
      <button
        onClick={handleReset}
        className={`${
          reset ? 'bg-mediumGreen' : 'bg-[#0D686D]'
        } text-center font-spaceMono text-xl text-darkGreen uppercase w-full py-2.5 rounded-md md:mt-auto`}
      >
        reset
      </button>
    </div>
  );
}

export default Output;
