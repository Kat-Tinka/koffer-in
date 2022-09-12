import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/context/authContext";

function RegisterView() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { register } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterHandler = () => {
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
    </div>
  );
}

export default RegisterView;
