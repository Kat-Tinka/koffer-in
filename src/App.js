import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CountriesView from "./views/CountriesView/CountriesView";
import RegionView from "./views/RegionView/RegionView";
import LogInView from "./views/LogInView/LogInView";
import ChatView from "./views/ChatView/ChatView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/countries" element={<CountriesView />} />
        <Route path="/" element={<Home />} />
        <Route path="/region" element={<RegionView />} />
        <Route path="/login" element={<LogInView />} />
        <Route path="/chat" element={<ChatView />} />
      </Routes>
    </div>
  );
}

export default App;
