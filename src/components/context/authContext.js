import React from "react";
import { createContext, useState } from "react";

//1.Create Context
export const AuthContext = createContext();

//2. Create the provider

export const AuthContextProvider = (props) => {
  //3.state and function

  const [user, setUser] = useState(null);

  //4.return teh provider with its value and inhject children component
  const register = (email, password) => {
    console.log(email, password);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
