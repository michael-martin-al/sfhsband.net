import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#115c3b',
    },
    secondary: {
      main: "#ffffff",
      dark: "#343b42"
    },
    background: {
      default: 'rgb(231, 235, 240)'
    }
  }
});

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      <Navbar />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

export default TemplateWrapper;
