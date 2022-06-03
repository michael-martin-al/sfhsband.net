import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import {
  CardHeader,
  CardMedia,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
} from '@mui/material'
import { ReadMore as ReadMoreIcon } from '@mui/icons-material'
import heroImage from "../img/hero.jpg"
import EventCard from "./EventCard"

const FeaturedCard = ({ title, date, excerpt, slug }) => (
  <Card sx={{ height: 600 }}>
    <CardHeader
      title={<Typography variant="h4" fontWeight={700}>{title}</Typography>}
      subheader={date}
    />
    <CardMedia
      component="img"
      height="194"
      image={heroImage}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {excerpt}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Button component={Link} to={slug} variant="outlined" size="medium" endIcon={<ReadMoreIcon />}>Read More</Button>
    </CardActions>
  </Card>
)

class EventRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {/* <Container component="section">
          <Grid container spacing={4} alignItems="stretch">
            {posts?.filter(({ node: post }) => post.frontmatter.featuredpost)?.map(({ node: post }) => (
              <Grid item xs={12} sm={6} key={post.id}>
                <FeaturedCard
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                  slug={post.fields.slug}
                />
              </Grid>
            ))}
          </Grid >
        </Container> */}

        <Container component="section" sx={{ paddingTop: 4 }}>
          <Grid container spacing={4} alignItems="stretch">
            {posts.map(({ node: post }) => (
              <Grid item xs={12} sm={4} key={post.id}>
                <EventCard
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                  slug={post.fields.slug}
                />
              </Grid>
            ))
            }
          </Grid >
        </Container>
      </>
    )
  }
}

EventRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function EventRoll() {
  return (
    <StaticQuery
      query={graphql`
        query EventRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "event-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <EventRollTemplate data={data} count={count} />}
    />
  );
}
