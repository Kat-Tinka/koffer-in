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
          Koffer in ... / <br />
          One Little Suitcase in...
        </Typography>
        <div></div>
        <Link to="/">Home </Link>| <Link to="/chat">Chat </Link>|{" "}
        <Link to="/region">Region </Link>|{" "}
        <Link to="/countries">Countries </Link>|{" "}
        <Button href="/register" color="inherit">
          Register
        </Button>
        <Button href="/login" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
