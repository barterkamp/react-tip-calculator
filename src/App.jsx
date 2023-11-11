import React, { useState, useEffect } from 'react';
import Buttons from './components/Buttons.jsx';
import CustomInput from './components/CustomInput.jsx';
import BillInput from './components/BillInput.jsx';
import logo from './assets/images/logo.svg';
import PeopleInput from './components/PeopleInput.jsx';
import Output from './components/Output.jsx';

function App() {
  const [bill, setBill] = useState('');
  const [percent, setPercent] = useState('');
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [custom, setCustom] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tipAmount, setTipAmount] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [error, setError] = useState(false);
  const [reset, setReset] = useState(false);

  const calculateAmount = (bill, percent, custom, numPeople) => {
    // Check if all required values are present
    if (bill && (percent || custom) && numPeople && Number(numPeople > 0)) {
      setReset(true);
      return (Number(bill) * (Number(percent) / 100 || Number(custom) / 100)) / Number(numPeople);
    } else return 0.0; // Default value when any of the required values is missing
  };

  const calculateTotalAmount = (bill, percent, custom, numPeople) => {
    // Check if all required values are present
    if (bill && (percent || custom) && numPeople && Number(numPeople > 0)) {
      return Number(bill) / Number(numPeople) + calculateAmount(bill, percent, custom, numPeople);
    } else {
      return 0.0; // Default value when any of the required values is missing
    }
  };

  useEffect(() => {
    // Calculate amount
    const calculatedAmount = calculateAmount(bill, percent, custom, numPeople);
    setTipAmount(calculatedAmount.toFixed(2));

    // Calculate total amount
    const calculatedTotalAmount = calculateTotalAmount(bill, percent, custom, numPeople);
    setTotalAmount(calculatedTotalAmount.toFixed(2));
  }, [bill, percent, custom, numPeople, calculateTotalAmount]);

  return (
    <div id="page-wrapper" className="bg-[#C5E4E7] flex flex-col items-center justify-center min-h-screen">
      <div>
        <img className="mb-12" src={logo} alt="" />
      </div>
      <main className="max-w-[920px] bg-white p-8 rounded-3xl flex flex-col gap-8 md:flex-row">
        <div className="input md:flex-1 md:grow">
          <div>
            <BillInput bill={bill} setBill={setBill} />
          </div>
          <p className="mb-4 text-base text-darkGray font-spaceMono">Select tip %</p>
          <div className="grid gap-4 grid-cols-2 mb-8 md:grid-cols-3">
            <Buttons
              percent={percent}
              setPercent={setPercent}
              setCustom={setCustom}
              selectedButtonId={selectedButtonId}
              setSelectedButtonId={setSelectedButtonId}
            />
            <CustomInput
              custom={custom}
              setCustom={setCustom}
              setPercent={setPercent}
              setSelectedButtonId={setSelectedButtonId}
            />
          </div>
          <div className="mb-8">
            <PeopleInput numPeople={numPeople} setNumPeople={setNumPeople} error={error} setError={setError} />
          </div>
        </div>
        <div className="output md:flex-1 md:grow">
          <Output
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            setSelectedButtonId={setSelectedButtonId}
            setBill={setBill}
            setNumPeople={setNumPeople}
            reset={reset}
            setReset={setReset}
            setCustom={setCustom}
            setError={setError}
          />
        </div>
      </main>
    </div>
  );
}
export default App;
