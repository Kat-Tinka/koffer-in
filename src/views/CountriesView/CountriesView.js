import React, { useEffect, useState } from "react";
import Country from "../../components/Country/Country";

const CountriesView = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();
    console.log("hallo", result);
    setCountries(result);
  };

  return (
    <div>
      <div>COUNTRIES</div>
      {countries.map((country) => (
        <Country countries={country} />
      ))}
    </div>
  );
};

export default CountriesView;
