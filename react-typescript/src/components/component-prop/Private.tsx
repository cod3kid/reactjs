import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};
function Private({ isLoggedIn, Component }: PrivateProps) {
  return <div>{isLoggedIn ? <Component name="Sufail" /> : <Login />}</div>;
}

export default Private;
