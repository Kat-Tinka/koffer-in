import React, { useEffect, useState } from "react";
import Country from "../../components/Country/Country";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const CountriesView = () => {
  const [countries, setCountries] = useState([]);
  // const [continents, setContinents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();
    console.log("fetchResponse ", result);
    setCountries(result);
    // setCapital(result);
  };

  return (
    <div>
      {/* <div>Capital</div>
      {capital.map((capital) => (
        <Capital capital={capital} />
        
      ))}
      </div>
  ); */}
      <div>COUNTRIES</div>

      {/* <Link to="/CountryDetails"></Link> */}
      {countries.map((country) => (
        <Country countries={country} />
      ))}
    </div>
  );
};

export default CountriesView;
