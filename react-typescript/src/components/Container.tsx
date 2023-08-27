import React from "react";

type ContainerProps = {
  containerStyles: React.CSSProperties;
};
function Container(props: ContainerProps) {
  const { containerStyles } = props;
  return <div style={containerStyles}>Container</div>;
}

export default Container;
