import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesView from "./views/CountriesView/CountriesView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/countries" element={<CountriesView />} />
      </Routes>
    </div>
  );
}

export default App;
