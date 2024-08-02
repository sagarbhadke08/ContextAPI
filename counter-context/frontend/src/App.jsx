
import './App.css'
import Counter from './Components/Counter.jsx'
import { CounterProvider } from './Components/CounterContext.jsx'


function App() {
 
  return (
    <CounterProvider>
      <Counter/>
      {/* <Counter count={count} increment={increment} decrement={decrement} reset={reset} /> */}
    </CounterProvider>
  );
}

export default App
