import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "@mui/material";

const CountryDetails = () => {
  const location = useLocation();
  console.log("location", location);
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();
  // const borders = [];

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?`);
  };
  const countryInfos = location.state.countries.countries;
  console.log("country>Border", countryInfos.borders);
  console.log(location.state.countries.countries.independent.toString());

  //! check it out:How to use useParams here?
  //! const { id } = useParams();

  return (
    <div>
      <p>MORE INFOS: Country Details for chosen Country</p>
      <>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Card>
            <section>
              {/* <h2>
              //! Country-Infos with id for:{id} <br /> {countryInfos.name.common}
              //!</h2> */}
              <h2>
                Country-Infos for: <br /> {countryInfos.name.common}
              </h2>
              <h3>Flags:</h3>
              {/* {countryInfos.png} */}
              <h3>Capital:</h3>
              {countryInfos.capital}
              <h3>Continents:</h3>
              {countryInfos.continents}
              <h3>Region:</h3>
              {countryInfos.region}
              <h3>Subregion:</h3>
              {countryInfos.subregion}
              <h3>Borders:</h3>
              <div>
                {/* map over and display an array of objects: */}
                {countryInfos.borders.map((border) => (
                  <div>{border}</div>
                ))}
              </div>
              {/* ======================================================= */}
              <h3>Population:</h3>
              {countryInfos.population}
              <h3>Languages:</h3>
              {/* How to get the "languages, which is an object?*/}
              {/* {countryInfos.languages} */}
              <h3>Currencies:</h3>
              {/* how to get the name and symbol of "currencies"? */}
              {countryInfos.currencies.toString()}
              <h3>Independent:</h3>
              {countryInfos.independent.toString()}
              <h3>Car-Side:</h3>
              {countryInfos.car.side}
              <h3>Timezones:</h3>
              {countryInfos.timezones}
              <h3>Un Member:</h3>
              {/* display Boolean value: */}
              {countryInfos.unMember.toString()}
              <h3>Fifa:</h3>
              {countryInfos.fifa}
              <h3>Translations - deutsch:</h3>
              {countryInfos.translations.deu.official}
              <h3>Translations - polski:</h3>
              {countryInfos.translations.pol.official}
              <h3>Translations - francais:</h3>
              {countryInfos.translations.fra.official}
            </section>
          </Card>
        )}
      </>
    </div>
  );
};

export default CountryDetails;
