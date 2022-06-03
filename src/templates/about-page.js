import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Typography, Container, Grid } from "@mui/material";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container component="section" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Grid container spacing={3}>
        <Grid item md={9} sm={12}>
          <Typography variant="h3" component="h1">
            {title}
          </Typography>
          <PageContent className="content" content={content} />
        </Grid>
        <Grid item md={3} sm={12}>
          <Typography>Sidebar</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
