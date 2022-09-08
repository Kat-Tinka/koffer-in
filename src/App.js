import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CountriesView from "./views/CountriesView/CountriesView";
import CountryDetails from "./views/CountryDetails";
import RegionView from "./views/RegionView/RegionView";
import LogInView from "./views/LogInView/LogInView";
import ChatView from "./views/ChatView/ChatView";
import { useState } from "react";

// function CountryDetail(params) {
//   const navigate = useNavigate();
// }

function App() {
  return (
    <>
      <div
        className="container"
        // style={{
        //   backgroundImage: "url(/assets/globalPic.jpg)",
        //   width: "100vw",
        // }}
      >
        <NavBar />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/region">Region</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
        <Routes>
          {/* indexpath is a single / => thats the root path of the application */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInView />} />
          <Route path="/chat" element={<ChatView />} />
          <Route path="/region" element={<RegionView />} />
          <Route path="/countries" element={<CountriesView />} />
          <Route path="/country/:countryname" element={<CountryDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
