import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Счетчик:</h1>
      <h2>{count}</h2>
      <button id="min" onClick={decrement}>
        - Минус
      </button>
      <button id="plus" onClick={increment}>
        Плюс +
      </button>
    </div>
  );
}

export default App;
