//for api
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      users: allMongodbGatsbyUsers {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve('./src/components/user.js')

  for (const { node } of data.users.edges) {
    createPage({
      path: `/user/${node.id}/`,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    })
  }
}