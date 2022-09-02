import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Country.css";

// const Country = () => {
//   return <div>Country</div>;
// };

// export default Country;
const Countries = (countries) => {
  console.log("Countries :>> ", countries);

  return (
    <div className="country-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={countries.countries.flags.png}
          // capital={countries.countries.capital}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {countries.countries.name.common}
            <div>Official Name: {countries.countries.name.official}</div>
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Languages:
            {countries.countries.languages}
          </Typography> */}
          {countries.countries.maps.googleMaps}
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Countries;
