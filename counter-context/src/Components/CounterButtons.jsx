import { useContext } from "react";
import { counterContext } from "./CounterContext";

export default function CounterButton() {
    // export default function CounerButton({ increment, decrement, reset }) {

    const { increment, decrement, reset } = useContext(counterContext);

    return (
        <div>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}