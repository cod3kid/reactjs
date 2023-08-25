import React from "react";

type OscarProps = {
  children: React.ReactNode;
  // children: JSX.Element
};
function Oscar(props: OscarProps) {
  const { children } = props;
  return <div>{children}</div>;
}

export default Oscar;
