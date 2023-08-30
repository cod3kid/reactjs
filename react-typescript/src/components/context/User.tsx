import { useContext } from "react";
import { UserContext } from "./UserProvider";
export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext?.setUser({ name: "Itachi", email: "itachi@mailinator.com" });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
      {/* <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div> */}
    </div>
  );
};
