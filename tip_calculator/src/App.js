import './App.css';
import { useState } from "react";
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function onReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSetPercentage={setPercentage1}> How did you like the service? </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSetPercentage={setPercentage2}> How did your friend like the service?  </SelectPercentage>
      {bill > 0 && (
        <>

          <Output bill={bill} tip={tip} />
          <Reset onReset={onReset} />

        </>
      )

      }
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>

      <label> How Much was the bill ? </label>
      <input type="text" placeholder="bill-value" value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
    </div>
  )
}
function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <label> {children} </label>
      <select value={percentage} onChange={(e) => onSetPercentage(Number(e.target.value))} >
        <option value="0">Disatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="15">Absolutely Amazing (15%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (

    <div>
      <h2>You Pay ${bill + tip} (${bill} + ${tip})</h2>
    </div>
  )
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}