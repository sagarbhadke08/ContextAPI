import { useContext } from "react";
import CounterButtons from "./CounterButtons.jsx"
import { counterContext } from "./CounterContext.jsx";

const Counter = () => {
    // const Counter = ({ count, increment, decrement, reset }) => {

    const { count } = useContext(counterContext);
    
    
    return (
        <div>
            <div>{count}</div>
            <CounterButtons />
            {/* <CounterButton increment={increment} decrement={decrement} reset={reset} /> */}
        </div>
    );
}

export default Counter;