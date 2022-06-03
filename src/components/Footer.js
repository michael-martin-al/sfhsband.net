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
        <img alt="SFHS Marching Band Logo" src={logo} height={50} />

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

export default Footer;
