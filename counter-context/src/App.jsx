import { useState } from 'react'
import './App.css'
import  Counter  from './Components/Counter.jsx'
function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount((count)=>count+1);
  }

  function decrement(){
    setCount((count)=>count-1);
  }

  function reset(){
    setCount(0);
  }
  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} reset={reset} />
    </>
  )
}

export default App
