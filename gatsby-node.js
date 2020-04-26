const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      meals: allMongodbGatsbyMeals {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve('./src/components/meal.js')

  for (const { node } of data.meals.edges) {
    createPage({
      path: `/meal/${node.id}/`,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    })
  }
}