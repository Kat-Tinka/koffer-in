import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Config/config";
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
      // const user = userCredential.user;
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

  const logout = () => {
    setUser(null);
    signOut(auth);
  };
  // ----------------------------------------------

  const checkIfUserisLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkIfUserisLoggedIn();
  }, []);
  // -------------------------------------------

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
