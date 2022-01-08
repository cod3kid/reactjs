import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    case "default":
      return state;
  }
};

export default function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter Value {count}</div>
      <button onClick={() => dispatch("increment")}> Increment </button>
      <button onClick={() => dispatch("decrement")}> Decrement</button>
      <button onClick={() => dispatch("reset")}> Reset </button>
    </div>
  );
}

// Simple State and Action
