import React from 'react';
import personIcon from '../assets/images/icon-person.svg';

function PeopleInput({ numPeople, setNumPeople, error, setError }) {
  // function to handle the input
  const handleInputChange = (event) => {
    const peopleValue = event.target.value;
    setNumPeople(peopleValue);

    if (peopleValue <= 0) {
      setError(true);
      setNumPeople('0'); // avoids negative numbers in input
    } else {
      setError(false);
    }
  };

  return (
    <form>
      <p className="mb-2 flex justify-between">
        <label htmlFor="people-input" className="text-base text-darkGray font-spaceMono">
          Number of People
        </label>
        <span className={`text-base text-warning font-spaceMono ${error ? 'block' : 'hidden'}`}>Can't be zero</span>
      </p>
      <p className="relative">
        <input
          className={`bg-lighterGray text-2xl placeholder-lightGray text-darkGreen font-spaceMono text-right w-full block rounded-md px-4 py-2 ${
            error
              ? 'focus:outline-warning border-2 border-warning'
              : 'focus:outline-mediumGreen border-2 border-lighterGray'
          }`}
          id="people-input"
          type="number"
          value={numPeople}
          onChange={handleInputChange}
          placeholder="0"
        />
        <img className="absolute top-1/2 -translate-y-1/2 left-4 block" src={personIcon} alt="" />
      </p>
    </form>
  );
}

export default PeopleInput;
