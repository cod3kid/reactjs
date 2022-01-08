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

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Counter One Value {count}</div>
      <div>Counter Two Value {countTwo}</div>

      <button onClick={() => dispatch("increment")}> Increment </button>
      <button onClick={() => dispatch("decrement")}> Decrement</button>
      <button onClick={() => dispatch("reset")}> Reset </button>

      <button onClick={() => dispatchTwo("increment")}> Increment </button>
      <button onClick={() => dispatchTwo("decrement")}> Decrement</button>
      <button onClick={() => dispatchTwo("reset")}> Reset </button>
    </div>
  );
}

// Multiple useReducer
