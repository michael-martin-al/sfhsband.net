import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Grid, Typography } from "@mui/material"
import NewsCard from "../components/NewsCard"

// eslint-disable-next-line
export const EventPageTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date,
  news
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      {helmet || ""}
      <Container component="section" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Grid container spacing={3}>
          <Grid item md={9} sm={12}>
            <Typography variant="h2" component="h1" >
              {title}
            </Typography>
            <Typography variant="overline">{date}</Typography>
            <Typography variant="overline">{description}</Typography>
            <PageContent content={content} />
          </Grid>
          <Grid item md={3} sm={12}>
            <Typography>Sidebar</Typography>
            {news.map(news => (
              <NewsCard {...news} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

EventPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const EventPage = ({ data, pageContext }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <EventPageTemplate
        content={page.html}
        contentComponent={HTMLContent}
        description={page.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Event">
            <title>{`${page.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${page.frontmatter.description}`}
            />
          </Helmet>
        }
        title={page.frontmatter.title}
        news={pageContext.news}
      />
    </Layout>
  );
};

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default EventPage;

export const pageQuery = graphql`
  query EventPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
