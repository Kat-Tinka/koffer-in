import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../components/context/authContext";

function LogInView () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginHandler = () => {
    // Check if email is valid, password length ...
    Login(email, password);
  };
  return (
  // <div>
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState(null);

  const { register } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value)
  };
  const handlePasswordHandler = (e) => {
    setPassword(e.target.value)};

  const handleRegisterHandler = () => {
    // Check if email is valid, password length ...
    register(email, password)}

  return (
    <div>
      <h2>LogIn</h2>
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
      <button onClick={handleLoginHandler}>LogIn</button>
      <Link to="/Register">No account? Please register first</Link>
    {/* </div> */}
  );
  


export default LogInView;
