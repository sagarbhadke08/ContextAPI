
import './App.css'
import Counter from './Components/Counter.jsx'
import { CounterContext } from './Components/CounterContext.jsx'


function App() {
 
  return (
    <CounterContext>
      <Counter/>
      {/* <Counter count={count} increment={increment} decrement={decrement} reset={reset} /> */}
    </CounterContext>
  );
}

export default App
