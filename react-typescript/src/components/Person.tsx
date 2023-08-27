import { PersonProps } from "./Person.types";

function Person(props: PersonProps) {
  const { first, last } = props.name;
  return (
    <div>
      {first} {last} 5 Messages
    </div>
  );
}

export default Person;
