import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../components/Config/config";
import { AuthContext } from "../../components/context/authContext";

function RegisterView() {
  console.log("auth :>> ", auth);
  // console.log("auth", AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterHandler = () => {
    // Check if email is valid, password length ...
    register(email, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <label htmlFor="email">Email{"    "}</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailHandler}
      />
      <br />
      <br />

      {/* <h2>Register</h2> */}
      <label htmlFor="Password">Password{"    "}</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordHandler}
      />
      <button onClick={handleRegisterHandler}>Register</button>
      <Link to="/LogIn">If you have an account already, go to Login</Link>
    </div>
  );
}

export default RegisterView;
