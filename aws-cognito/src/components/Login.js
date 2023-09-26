import { useEffect, useState } from "react";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import "../App.css";
import UserPool from "../utils/cognito";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(UserPool.getCurrentUser());
  }, []);

  const signInUser = () => {
    const authenticationDetails = new AuthenticationDetails({
      Username: formData.email,
      Password: formData.password,
    });

    const userData = {
      Username: formData.email,
      Pool: UserPool,
    };
    console.log(formData);
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        console.log(result);
      },

      onFailure: (err) => {
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  return (
    <div className="form">
      <h3>Login</h3>
      <div className="formField">
        <label style={{ alignSelf: "flex-start" }}>Email</label>
        <input
          className="textInput"
          id="email"
          type="text"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="formField">
        <label style={{ marginTop: 10, alignSelf: "flex-start" }}>
          Password
        </label>
        <input
          className="textInput"
          id="password"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div>
        <button className="signup" onClick={() => signInUser()}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
