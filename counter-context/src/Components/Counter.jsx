import CounterButton from "./CounterButtons.jsx"

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div>
            <div>{count}</div>
            <CounterButton increment={increment} decrement={decrement} reset={reset} />
        </div>
    );
}

export default Counter;