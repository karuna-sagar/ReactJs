import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("jan 22 2027")
  date.setDate(date.getDate() + count)
  return (
    <div>
      <div>

        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step:{Math.abs(step)}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count:{Math.abs(count)}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today ` : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  )
}



