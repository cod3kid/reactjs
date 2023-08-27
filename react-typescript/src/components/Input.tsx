import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input(props: InputProps) {
  const { value, handleChange } = props;
  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;
