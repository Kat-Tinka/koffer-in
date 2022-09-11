import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* sx={{ xs: "1", sm: "2", md: "4", lg: "4", xl: "6" }} */}
          Koffer in ... / <br />
          One Little Suitcase in...
        </Typography>
        <Button color="inherit">Register</Button>
        {/* <Link to="/Register>Register</Link>" */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
