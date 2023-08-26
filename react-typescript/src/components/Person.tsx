import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
function Person(props: PersonProps) {
  const { first, last } = props.name;
  return (
    <div>
      {first} {last} 5 Messages
    </div>
  );
}

export default Person;
