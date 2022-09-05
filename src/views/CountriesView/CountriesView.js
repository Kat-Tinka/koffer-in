import React, { useEffect, useState } from "react";
import Country from "../../components/Country/Country";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const CountriesView = () => {
  const [countries, setCountries] = useState([]);
  // const [isLoading, setIsLoading] = useState([true]);
  // const [continents, setContinents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const result = await response.json();
    console.log("fetchResponse ", result);
    setCountries(result);
  };

  return (
    <div>
      <div>ALL COUNTRIES</div>
      {countries.map((country) => (
        <Country countries={country} />
      ))}
    </div>
  );
};
// }
export default CountriesView;
