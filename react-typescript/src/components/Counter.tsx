import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

// This approach is called discriminated Unions in TypeScript
type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = {
  count: 0,
};
const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>

      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
