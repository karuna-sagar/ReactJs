
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  <div>
    <div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <div>Count={count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  </div>
}
export default App;
