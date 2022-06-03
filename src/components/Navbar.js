import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Events", path: "/events" }];

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" height={90}>
      <Toolbar>
        <IconButton component={Link} to="/" padding={0} margin={0} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img alt="SFHS Marching Band Logo" src={logo} height={50} />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              component={Link}
              to={page.path}
              key={page.name}
              textDecoration="none"
              variant="text"
              sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
