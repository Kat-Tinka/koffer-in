import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CountriesView from "./views/CountriesView/CountriesView";
import CountryDetails from "./views/CountryDetails";
import RegionView from "./views/RegionView/RegionView";
import LogInView from "./views/LogInView/LogInView";
import ChatView from "./views/ChatView/ChatView";

// function CountryDetail(params) {
//   const navigate = useNavigate();
// }

function App() {
  return (
    <div className="container">
      <header className="header">
        <h6>Little Suitcase in...</h6>
      </header>
      {/* <div className="App"> */}
      {/* <h1>That's the App.js</h1> */}
      <NavBar />
      {/* const navigate = useNavigate(); */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInView />} />
        <Route path="/chat" element={<ChatView />} />

        <Route path="/region" element={<RegionView />} />
        <Route path="/countries" element={<CountriesView />} />
        <Route path="/country/:countryname" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
