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
import { app } from "./components/Config/config";
import { AuthContextProvider } from "./components/context/authContext";

// function CountryDetail(params) {
//   const navigate = useNavigate();
// }

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
