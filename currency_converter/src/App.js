import { useEffect, useState } from "react";
import "./style.css";
export default function App() {
  const [amount, setAmount] = useState(100);
  const [fromCurr, setFromCurr] = useState("INR");
  const [toCurr, setToCurr] = useState("USD");
  useEffect(function () {

  }, [])
  return (
    <div>
      <input type="text" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <select value={fromCurr} onChange={e => setFromCurr(e.target.value)} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurr} onChange={e => setToCurr(e.target.value)} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  )
}