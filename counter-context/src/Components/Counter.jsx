import { useContext } from "react";
import CounterButton from "./CounterButtons.jsx"
import { counterContext } from "./CounterContext.js";

const Counter = () => {
// const Counter = ({ count, increment, decrement, reset }) => {

const {count} = useContext(counterContext)
return (
        <div>
            <div>{count}</div>
            <CounterButton  />
            {/* <CounterButton increment={increment} decrement={decrement} reset={reset} /> */}
        </div>
    );
}

export default Counter;