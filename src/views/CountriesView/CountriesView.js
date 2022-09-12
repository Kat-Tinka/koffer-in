import React, { useEffect, useState } from "react";
import Country from "../../components/Country/Country";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./CountriesView.css";
import { Grid } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>ALL COUNTRIES</div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 12 }}
      >
        {/* <Grid container className="countriesContainer"> */}
        {countries.map((country) => (
          <Grid item key={country.name.common}>
            <Country countries={country} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
// }
export default CountriesView;
