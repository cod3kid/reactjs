import Greet from "../Greet";

function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  return <div>{props.isLoggedIn}</div>;
}

export default CustomComponent;
