import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementTwo":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementTwo":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    case "default":
      return state;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter One Value {count.firstCounter}</div>
      <div>Counter Two Value {count.secondCounter}</div>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        {" "}
        Decrement{" "}
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        {" "}
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        {" "}
        Decrement by 5{" "}
      </button>
      <button onClick={() => dispatch({ type: "incrementTwo", value: 1 })}>
        {" "}
        Increment Counter Two
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 1 })}>
        {" "}
        Decrement Counter Two{" "}
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
    </div>
  );
}

// Complex State and Action
