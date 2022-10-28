import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import React, { Component } from "react";
// import { BrowserRouter, Switch } from "react-router-dom";
// import ListScreen from "./screen/ListScreen";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CountriesView from "./views/CountriesView/CountriesView";
import CountryDetails from "./views/CountryDetails";
import RegionView from "./views/RegionView/RegionView";
import RegisterView from "./views/RegisterView/RegisterView";
import LogInView from "./views/LogInView/LogInView";
import ChatView from "./views/ChatView/ChatView";
import { useState } from "react";
import { app } from "./Config/config";
import { AuthContextProvider } from "./context/authContext";
import {auth} from './Config/config'
import ProtectedRoute from "./components/ProtectedRoute";
// import { getAuth } from "./firebase/auth";


// function CountryDetail(params) {
//   const navigate = useNavigate();
// }
const style = {
  message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
  sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`
}

function App() {
  console.log("app", app);
  return (
    <AuthContextProvider>
      <div
        className="container"
        // style={{
        //   backgroundImage: "url(/assets/globalPic.jpg)",
        //   width: "100vw",
        // }}
      >
        <NavBar />

        <Routes>
          {/* indexpath is a single / => thats the root path of the application */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LogInView />} />
          <Route
            // path="/chat"
            path="chat"
            element={
              <ProtectedRoute>
                <ChatView />

              </ProtectedRoute>
              // <ProtectedRoute>
              
              // </ProtectedRoute>
              // ={<ChatView />} />
            }
          />
          <Route path="/region" element={<RegionView />} />
          <Route path="/countries" element={<CountriesView />} />
          <Route path="/country/:countryname" element={<CountryDetails />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
