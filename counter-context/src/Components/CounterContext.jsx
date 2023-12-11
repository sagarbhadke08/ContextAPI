import { useState, createContext, useContext } from "react";

export const counterContext = createContext(null);

export const CounterContext = ({ children }) => {
  const [count, setCount] = useState(0);

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
    count,
    increment,
    decrement,
    reset,
  };

  return (
    <counterContext.Provider value={values}>
      {children}
    </counterContext.Provider>
  );
};

// export const useCounter=()=>{
//   const context = useContext(counter)
// }
