import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const location = useLocation();
  console.log(location);
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {}, [name]);

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  };

  return (
    <div>
      <p>MORE INFOS =>Country Details for chosen Country</p>
    </div>
  );
};

export default CountryDetails;
