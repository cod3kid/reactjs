import React from "react";

type GreetProps = {
  name: string;
  messagesCount: number;
  isLoggedIn: boolean;
};
function Greet(props: GreetProps) {
  const { name, messagesCount, isLoggedIn } = props;
  return (
    <div>
      <h2>
        {!isLoggedIn
          ? `Hi ${name}! you have ${messagesCount} messages.`
          : `Hi Guest`}
      </h2>
    </div>
  );
}

export default Greet;
