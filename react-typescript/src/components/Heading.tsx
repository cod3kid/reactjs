import React from "react";
type HeadingProp = {
  children: string;
};
function Heading({ children }: HeadingProp) {
  return <h2>{children}</h2>;
}

export default Heading;
