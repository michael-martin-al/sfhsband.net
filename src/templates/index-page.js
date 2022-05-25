import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import Features from "../components/Features";
import EventRoll from "../components/EventRoll";
import FullWidthImage from "../components/FullWidthImage";
import heroVideo from "../../static/img/band.mp4"
import ReactPlayer from "react-player"

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <>
      <Box component="section" sx={{
        width: '100%',
        height: '60vh',
        position: 'relative',
        '& video': {
          objectFit: 'cover',
        },
        borderBottom: '20px solid',
        borderColor: 'secondary.dark'
      }}>
        <ReactPlayer
          url={heroVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(17, 92, 59, 0.5)',
        }}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="#fff"
          >
            <Container maxWidth="md">
              <Box textAlign="center">
                <Typography variant="h2" component="h1" fontWeight={700}>
                  Edmond Santa Fe
                </Typography>
                <Typography variant="h4">Marching Band</Typography>
                <Typography variant="subtitle2">2022 Champions, Acme Marching Content</Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <Box component="section" paddingTop={4} paddingBottom={4} textAlign="center">
        <Typography variant="overline" paddingBottom={3}>
          Latest Events
        </Typography>
      </Box>
      <EventRoll />
      <Box paddingTop={4}>
        <Button component={Link} to="/events">
          Read more
        </Button>
      </Box>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
