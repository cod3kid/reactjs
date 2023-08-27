import React from "react";

type ButtonProps = {
  clicked: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  const { clicked } = props;
  return (
    <div>
      <button onClick={(e) => clicked(e, 1)}> Button</button>
    </div>
  );
}

export default Button;
