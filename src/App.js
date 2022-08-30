import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CountriesView from "./views/CountriesView/CountriesView";
import HomeView from "./views/HomeView/HomeView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/countries" element={<CountriesView />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
