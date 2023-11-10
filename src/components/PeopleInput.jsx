import React from 'react';

function PeopleInput({ numPeople, setNumPeople }) {
  const handleInputChange = (event) => {
    const peopleValue = event.target.value;
    if (peopleValue < 0) {
      setNumPeople('0');
    } else {
      setNumPeople(peopleValue);
    }
  };

  return (
    <form className="mb-8">
      <p className="mb-2">
        <label htmlFor="people-input" className="text-base text-darkGray font-spaceMono">
          Number of People
        </label>
      </p>
      <input
        className="bg-lighterGray text-2xl placeholder-lightGray text-darkGreen font-spaceMono text-right w-full block rounded-md px-4 py-2"
        id="people-input"
        type="number"
        value={numPeople}
        onChange={handleInputChange}
        placeholder="0"
      />
    </form>
  );
}

export default PeopleInput;
