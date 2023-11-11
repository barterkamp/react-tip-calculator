import React, { useState } from 'react';

function Buttons({ setPercent, setCustom, selectedButtonId, setSelectedButtonId }) {
  const buttons = [
    { id: 1, percentage: 5 },
    { id: 2, percentage: 10 },
    { id: 3, percentage: 15 },
    { id: 4, percentage: 25 },
    { id: 5, percentage: 50 },
  ];

  const handleButtonId = (id) => {
    setSelectedButtonId(id);
  };

  // als de button geklikt wordt, active state op die specifieke button plaatsen met setActive = true die de bg-color naar mediumGreen zet
  return (
    <>
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => {
            setPercent(button.percentage);
            handleButtonId(button.id);
            if (setPercent) {
              setCustom('');
            }
          }}
          className={`${
            selectedButtonId === button.id ? 'bg-mediumGreen text-darkGreen' : 'bg-darkGreen text-white'
          } bg-darkGreen text-2xl font-spaceMono rounded-md py-1.5 w-auto hover:bg-mediumGreen
            hover:text-darkGreen focus:bg-mediumGreen focus:text-darkGreen active:bg-mediumGreen active:text-darkGreen`}
        >
          {button.percentage}%
        </button>
      ))}
    </>
  );
}

export default Buttons;
