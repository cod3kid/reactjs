import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";

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
export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <div className="App">
        {/* 1. Simple State and Action */}
        {/* <CounterOne /> */}
        {/* 2. Complex State and Action */}
        {/* <CounterTwo /> */}
        {/* 3. Multiple useReducers */}
        {/* <CounterThree /> */}
        {/* 4. useReducer with useContext for Global State Management */}
        {/* Counter Value {count}
        <ComponentA />
        <ComponentB /> */}

        {/* 5. useReducer to fetch data */}
        <DataFetching />
      </div>
    </CountContext.Provider>
  );
}

export default App;
