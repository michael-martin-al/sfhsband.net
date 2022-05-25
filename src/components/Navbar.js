import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Events", path: "/events" }];

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" height={90}>
      <Toolbar>
        <IconButton as={Link} to="/" padding={0} margin={0} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src={logo} height={50} />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Santa Fe Band
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              as={Link}
              to={page.path}
              key={page.name}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}


// return (
//   <nav
//     className="navbar is-transparent"
//     role="navigation"
//     aria-label="main-navigation"
//   >
//     <div className="container">
//       <div className="navbar-brand">
//         <Link to="/" className="navbar-item" title="Logo">
//           <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
//         </Link>
//         {/* Hamburger menu */}
//         <div
//           className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//           data-target="navMenu"
//           role="menuitem"
//           tabIndex={0}
//           onKeyPress={() => this.toggleHamburger()}
//           onClick={() => this.toggleHamburger()}
//         >
//           <span />
//           <span />
//           <span />
//         </div>
//       </div>
//       <div
//         id="navMenu"
//         className={`navbar-menu ${this.state.navBarActiveClass}`}
//       >
//         <div className="navbar-start has-text-centered">
//           <Link className="navbar-item" to="/about">
//             About
//           </Link>
//           <Link className="navbar-item" to="/products">
//             Products
//           </Link>
//           <Link className="navbar-item" to="/events">
//             Events
//           </Link>
//           <Link className="navbar-item" to="/contact">
//             Contact
//           </Link>
//           <Link className="navbar-item" to="/contact/examples">
//             Form Examples
//           </Link>
//         </div>
//         <div className="navbar-end has-text-centered">
//           <a
//             className="navbar-item"
//             href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span className="icon">
//               <img src={github} alt="Github" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </nav>
// );
//   }
// };

export default Navbar;
