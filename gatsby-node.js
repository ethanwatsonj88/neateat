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
      },
      users: allMongodbGatsbyUsers {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const userTemplate = path.resolve('./src/components/user.js')

  for (const { node } of data.users.edges) {
    createPage({
      path: `/user/${node.id}/`,
      component: userTemplate,
      context: {
        id: node.id,
      },
    })
  }
  
  const mealTemplate = path.resolve('./src/components/meal.js')

  for (const { node } of data.meals.edges) {
    createPage({
      path: `/meal/${node.id}/`,
      component: mealTemplate,
      context: {
        id: node.id,
      },
    })
  }
}