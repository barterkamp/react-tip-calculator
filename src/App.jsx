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
  const [custom, setCustom] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tipAmount, setTipAmount] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [error, setError] = useState(false);

  const calculateAmount = (bill, percent, custom, numPeople) => {
    // Check if all required values are present
    if (bill && (percent || custom) && numPeople && Number(numPeople > 0)) {
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
    <div id="page-wrapper" className="bg-[#C5E4E7] flex flex-col items-center min-h-screen">
      <div>
        <img className="py-12" src={logo} alt="" />
      </div>
      <div id="component-wrapper" className="bg-white p-8 rounded-3xl">
        <div className="mb-8">
          <BillInput bill={bill} setBill={setBill} />
        </div>
        <p className="mb-4 text-base text-darkGray font-spaceMono">Select tip %</p>
        <div className="grid gap-4 grid-cols-2 mb-8">
          <Buttons percent={percent} setPercent={setPercent} setCustom={setCustom} />
          <CustomInput custom={custom} setCustom={setCustom} setPercent={setPercent} />
        </div>
        <div className="mb-8">
          <PeopleInput numPeople={numPeople} setNumPeople={setNumPeople} error={error} setError={setError} />
        </div>
        <Output tipAmount={tipAmount} totalAmount={totalAmount} />
      </div>
    </div>
  );
}
export default App;
