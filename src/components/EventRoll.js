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
  Avatar,
  IconButton,
  Typography,
  Collapse,
  Box,
  Container,
  Divider
} from '@mui/material'
import { red } from '@mui/material/colors'
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@mui/icons-material'

function ExpandMore() {
  return <React.Fragment />
}

function FeaturedCard({ title, date, excerpt, slug }) {
  return (
    <Box paddingBottom={4}>
      <Container component="section" maxWidth="md">
        <Box paddingBottom={4}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle2" paragraph>{date}</Typography>
          <Typography variant="body1">{excerpt}</Typography>
          <Box textAlign="center" paddingTop={4}>
            <Button variant="contained" component={Link} to={slug} size="large">Continue reading</Button>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  )
}

function EventCard({ isFeatured, title, date, excerpt, slug }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(true)
  }

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader
        title={title}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button component={Link} to={slug} size="small">Read More</Button>
      </CardActions>
    </Card>
  )
}

class EventRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts?.filter(({ node: post }) => post.frontmatter.featuredpost)?.map(({ node: post }) => (
          <FeaturedCard
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            slug={post.fields.slug}
          />
        ))}

        <Container component="section">
          <Grid container spacing={4} alignItems="stretch">
            {posts?.filter(({ node: post }) => !post.frontmatter.featuredpost)?.map(({ node: post }) => (
              <Grid item xs={12} sm={6} key={post.id}>
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
                  featuredpost
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
