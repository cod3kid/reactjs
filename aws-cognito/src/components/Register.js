import { useState } from "react";
import "../App.css";
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../utils/cognito";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [registeredUser, setRegisteredUser] = useState();
  const [showConfirmationField, setShowConfirmationField] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState();

  const signUp = () => {
    const attributeList = [];
    const dataEmail = {
      Name: "email",
      Value: formData.email,
    };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);

    UserPool.signUp(
      formData.username,
      formData.password,
      attributeList,
      null,
      (err, result) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        const cognitoUser = result.user;
        console.log("user name is " + cognitoUser.getUsername());
        setRegisteredUser(cognitoUser.getUsername());
        setShowConfirmationField(true);
      }
    );
  };

  const confirmUser = () => {
    const userData = {
      Username: registeredUser,
      Pool: UserPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
      navigate("/login");
    });
  };

  return (
    <div className="form">
      <h3>Register</h3>
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
        <label style={{ alignSelf: "flex-start" }}>Username</label>
        <input
          className="textInput"
          id="username"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </div>
      <div className="formField">
        <label style={{ marginTop: 10, alignSelf: "flex-start" }}>
          Password
        </label>
        <input
          className="textInput"
          id="password"
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div>
        <button
          disabled={showConfirmationField}
          className="signup"
          onClick={() => signUp()}
        >
          Sign Up
        </button>
      </div>

      {showConfirmationField && (
        <>
          <div className="formField">
            <label style={{ alignSelf: "flex-start" }}>Confirmation Code</label>
            <input
              className="textInput"
              id="code"
              type="text"
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </div>

          <div>
            <button className="signup" onClick={() => confirmUser()}>
              Confirm
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Register;
