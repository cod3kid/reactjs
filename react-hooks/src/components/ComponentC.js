import React, { useContext } from "react";
import { CountContext } from "../App";

export default function ComponentC() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component C
      <button onClick={() => countContext.dispatch("increment")}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={() => countContext.dispatch("decrement")}>
        {" "}
        Decrement
      </button>
      <button onClick={() => countContext.dispatch("reset")}> Reset </button>
    </div>
  );
}
