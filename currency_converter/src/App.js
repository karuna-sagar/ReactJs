import { useEffect, useState } from "react";
import "./style.css";
export default function App() {
  const [amount, setAmount] = useState(100);
  const [fromCurr, setFromCurr] = useState("INR");
  const [toCurr, setToCurr] = useState("USD");
  const [converted, setConverted] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  useEffect(function () {
    async function convert() {
      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`)
      const data = await res.json()
      setConverted(data.rates[toCurr])
      setIsLoading(false)
    }
    if (toCurr === fromCurr) return setConverted(amount)
    convert()
  }, [amount, fromCurr, toCurr])
  return (
    <div>
      <input type="text" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <select value={fromCurr} onChange={e => setFromCurr(e.target.value)} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurr} onChange={e => setToCurr(e.target.value)} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted} {toCurr}</p>
    </div>
  )
}