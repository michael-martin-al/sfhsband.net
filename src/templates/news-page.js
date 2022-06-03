import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Grid, Typography } from "@mui/material"
import EventCard from "../components/EventCard";

// eslint-disable-next-line
export const NewsPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  event
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      {helmet || ""}
      <Container component="section" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Grid container spacing={3}>
          <Grid item md={9} sm={12}>
            <Typography variant="h3" component="h1" >
              {title}
            </Typography>
            <PageContent content={content} />
          </Grid>
          <Grid item md={3} sm={12}>
            <Typography>Sidebar</Typography>
            <EventCard {...event} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

NewsPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const NewsPage = ({ data, pageContext }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <NewsPageTemplate
        content={page.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | News">
            <title>{`${page.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${page.frontmatter.body}`}
            />
          </Helmet>
        }
        title={page.frontmatter.title}
        event={pageContext.event}
      />
    </Layout>
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        event
      }
    }
  }
`;
