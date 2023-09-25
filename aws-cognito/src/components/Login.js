import { useState } from "react";
import "../App.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
}

export default Register;
