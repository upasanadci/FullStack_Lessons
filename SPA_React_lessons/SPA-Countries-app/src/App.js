import { useState } from "react";
import "./App.css";
import AllCountries from "./components/AllCountries";
import ByRegion from "./components/ByRegion";

function App() {
  const [displayComponent, setDisplayComponent] = useState("allCountries");

  const handleChange = (e) => {
    
    setDisplayComponent(e.target.value);
  };

  return (
    <div className="App">
      <div className="rad-list">
        <input
          type="radio"
          className="rad"
          name="searchRef"
          value="allCountries"
          defaultChecked
          onChange={handleChange}
        />
        <label>All Countries</label>

        <input
          type="radio"
          className="rad"
          name="searchRef"
          value="byRegion"
          onChange={handleChange}
        />
        <label> By Region</label>
      </div>
      {displayComponent === "allCountries" ? <AllCountries/> : <ByRegion/>}
    </div>
  );
}

export default App;
