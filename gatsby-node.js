const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              templateKey
              event
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id

      function findEventBySlug(slug) {
        const event = posts.find((post) =>
          post.node.fields.slug === slug
        )
        if (!event) return {}
        return {
          slug: event.node.fields.slug,
          title: event.node.frontmatter.title,
          date: event.node.frontmatter.date,
          excerpt: event.node.excerpt,
        }
      }

      function findNewsByEventSlug(slug) {
        return posts.filter(post =>
          post.node.frontmatter.event === slug
        ).map(post => ({
          slug: post.node.fields.slug,
          title: post.node.frontmatter.title,
          excerpt: post.node.excerpt,
          date: post.node.frontmatter.date
        }))
      }

      let additionalContext = {}

      if (edge.node.frontmatter.templateKey === 'news-page' && edge.node.frontmatter.event) {
        additionalContext = {
          event: findEventBySlug(edge.node.frontmatter.event)
        }
      }

      if (edge.node.frontmatter.templateKey === 'event-page') {
        additionalContext = {
          news: findNewsByEventSlug(edge.node.fields.slug)
        }
      }

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          ...additionalContext
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      date: Date @dateformat(formatString: "MMMM DD, YYYY")
      description: String
      event: String
    }
  `
  createTypes(typeDefs)
}
