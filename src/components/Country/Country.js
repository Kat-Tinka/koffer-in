import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Country.css";
import { useNavigate, Link } from "react-router-dom";
import { maxHeight, padding } from "@mui/system";

// const Country = () => {
//   return <div>Country</div>;
// };

// export default Country;
const Countries = (countries) => {
  console.log("Countries :>> ", countries);

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("You clicked!");
  };

  return (
    <div className="wrapper">
      <div className="country-container">
        {/* <div
        className="grid grid-cols-1 gap-5 p-5
        md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-5 2xl:container 2xl:mx-auto"</div>
      > */}
        <Card className="country-card">
          <CardMedia
            className="flag-card"
            component="img"
            // height="100%"
            // height="50px"
            image={countries.countries.flags.png}
            // capital={countries.countries.capital}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <div>
                {/* <Typography className="font-bold" component="div"> */}
                {countries.countries.name.common} <br /> Official Name:
                <br />
                {countries.countries.name.official}
                {/* <div>Official Name: {countries.countries.name.official}</div> */}
              </div>

              <div>
                Continent: {countries.countries.continents}
                <br />
                Capital:
                {countries.countries.capital}
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={`/country/${countries.countries.name.official}`}
              state={{ countries }}
            >
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Countries;
