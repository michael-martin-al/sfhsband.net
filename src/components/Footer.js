import * as React from "react";
import { Link } from "gatsby";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from '../img/logo.png';

const Footer = () => (
  <Box component="footer" bgcolor="#343b42" paddingTop={4} paddingBottom={4}>
    <Container>
      <Stack direction="row" spacing={4} alignContent="center">
        <img src={logo} height={50} />

        <Stack direction="row" spacing={4} flex={1}>
          <Button color="secondary" component={Link} to="/">Home</Button>
          <Button color="secondary" component={Link} to="/about">About</Button>
          <Button color="secondary" component={Link} to="/events">Events</Button>
        </Stack>

        <Typography variant="overline" color="secondary">&copy; Copyright 2022</Typography>
      </Stack>
    </Container>
  </Box>
);

//   <footer className="footer has-background-black has-text-white-ter">
//     <div className="content has-text-centered">
//       <img
//         src={logo}
//         alt="Kaldi"
//         style={{ width: "14em", height: "10em" }}
//       />
//     </div>
//     <div className="content has-text-centered has-background-black has-text-white-ter">
//       <div className="container has-background-black has-text-white-ter">
//         <div style={{ maxWidth: "100vw" }} className="columns">
//           <div className="column is-4">
//             <section className="menu">
//               <ul className="menu-list">
//                 <li>
//                   <Link to="/" className="navbar-item">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="navbar-item" to="/about">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="navbar-item" to="/products">
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="navbar-item" to="/contact/examples">
//                     Form Examples
//                   </Link>
//                 </li>
//                 <li>
//                   <a
//                     className="navbar-item"
//                     href="/admin/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Admin
//                   </a>
//                 </li>
//               </ul>
//             </section>
//           </div>
//           <div className="column is-4">
//             <section>
//               <ul className="menu-list">
//                 <li>
//                   <Link className="navbar-item" to="/blog">
//                     Latest Stories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="navbar-item" to="/contact">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </section>
//           </div>
//           <div className="column is-4 social">
//             <a title="facebook" href="https://facebook.com">
//               <img
//                 src={facebook}
//                 alt="Facebook"
//                 style={{ width: "1em", height: "1em" }}
//               />
//             </a>
//             <a title="twitter" href="https://twitter.com">
//               <img
//                 className="fas fa-lg"
//                 src={twitter}
//                 alt="Twitter"
//                 style={{ width: "1em", height: "1em" }}
//               />
//             </a>
//             <a title="instagram" href="https://instagram.com">
//               <img
//                 src={instagram}
//                 alt="Instagram"
//                 style={{ width: "1em", height: "1em" }}
//               />
//             </a>
//             <a title="vimeo" href="https://vimeo.com">
//               <img
//                 src={vimeo}
//                 alt="Vimeo"
//                 style={{ width: "1em", height: "1em" }}
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </footer>
// );

export default Footer;
