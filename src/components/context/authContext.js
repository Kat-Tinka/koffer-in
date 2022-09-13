import React from "react";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../Config/config";

//1.Create Context
export const AuthContext = createContext();

//2. Create the provider

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

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
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage> :>> ", errorMessage);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
