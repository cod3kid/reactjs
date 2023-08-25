import React from "react";
type HeadingProp = {
  children: string;
};
function Heading(props: HeadingProp) {
  const { children } = props;
  return <h2>{children}</h2>;
}

export default Heading;
