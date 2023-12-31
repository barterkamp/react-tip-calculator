import React from 'react';

function CustomInput({ custom, setCustom, setPercent, setSelectedButtonId }) {
  const handleInputChange = (event) => {
    const customValue = event.target.value;
    setCustom(customValue);
    setSelectedButtonId(null);
    setPercent('');
  };

  return (
    <form>
      <label htmlFor="custom-input">
        <input
          className="bg-lighterGray text-2xl placeholder-lightGray text-darkGreen font-spaceMono text-center w-full h-full block rounded-md focus:outline-mediumGreen"
          id="custom-input"
          type="text"
          value={custom}
          onChange={handleInputChange}
          placeholder="Custom"
        />
      </label>
    </form>
  );
}

export default CustomInput;
