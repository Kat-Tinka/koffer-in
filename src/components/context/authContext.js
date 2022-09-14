import React from "react";
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Config/config";
import { useNavigate } from "react-router-dom";

//1.Create Context
export const AuthContext = createContext();

//2. Create the provider
export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const redirectTo = useNavigate();

  const register = async (email, password) => {
    console.log(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("userCredential:>>  ", userCredential);
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage> :>> ", errorMessage);
    }
  };

  const login = (email, password) => {
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        setUser(userCredential.user);
        redirectTo("/");
      })
      .catch((error) => {
        setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
