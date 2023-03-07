import React, { useState } from "react";

function Input({ showValue }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      {showValue(inputValue)}
    </div>
  );
}

export default Input;
