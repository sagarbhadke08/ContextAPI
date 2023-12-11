import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter.jsx'
import { counterContext } from './Components/CounterContext.js'
function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  function reset() {
    setCount(0);
  }

  const values = {
    count, increment, decrement, reset
  };

  return (
    <counterContext.Provider value={values}>
      <Counter
      />
      {/* <Counter count={count} increment={increment} decrement={decrement} reset={reset} /> */}
    </counterContext.Provider>
  )
}

export default App
