import React from 'react';

function CustomInput({ custom, setCustom, setPercent }) {
  const handleInputChange = (event) => {
    const customValue = event.target.value;
    setCustom(customValue);
    setPercent('');
  };

  return (
    <form>
      <label htmlFor="custom-input">
        <input
          className="bg-lighterGray text-2xl placeholder-lightGray text-darkGreen font-spaceMono text-center w-full h-full block rounded-md"
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
