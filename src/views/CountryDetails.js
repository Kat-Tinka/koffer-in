import React from "react";
import { useLocation } from "react-router-dom";

const CountryDetails = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <p>CountryDetails</p>
      {/* {.state.state.countries.countries.capital}; */}
    </div>
  );
};

export default CountryDetails;
