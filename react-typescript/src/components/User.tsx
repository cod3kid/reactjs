import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
function User() {
  // {} as AuthUser is Type Assertion. Use it only if we can get the actual value during first render
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Sufail",
      email: "sufail@mailinator.com",
    });
  };

  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={() => handleLogin()}>Log In</button>
      {/* <button onClick={() => handleLogout()}>Log Out</button> */}
      <div>User name is {user.name}</div>
      <div>Email is {user.email}</div>
    </div>
  );
}

export default User;
