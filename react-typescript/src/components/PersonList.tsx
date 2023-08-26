import React from "react";

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
function PersonList(props: PersonListProps) {
  const { names } = props;
  return (
    <div>
      {names.map((shinobi) => (
        <ul>
          {shinobi.first} {shinobi.last}
        </ul>
      ))}
    </div>
  );
}

export default PersonList;
