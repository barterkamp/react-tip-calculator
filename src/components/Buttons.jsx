import React from 'react';

function Buttons({ setPercent, setCustom }) {
  const buttons = [
    { id: 1, percentage: 5 },
    { id: 2, percentage: 10 },
    { id: 3, percentage: 15 },
    { id: 4, percentage: 25 },
    { id: 5, percentage: 50 },
  ];

  return (
    <>
      {buttons.map((button) => (
        <React.Fragment key={button.id}>
          <button
            onClick={() => {
              setPercent(button.percentage);
              if (setPercent) {
                setCustom('');
              }
            }}
            className="bg-darkGreen text-white text-2xl font-spaceMono rounded-md py-1.5 w-auto hover:bg-mediumGreen
            hover:text-darkGreen focus:bg-mediumGreen focus:text-darkGreen active:bg-mediumGreen active:text-mediumGreen"
          >
            {button.percentage}%
          </button>
        </React.Fragment>
      ))}
    </>
  );
}

export default Buttons;
