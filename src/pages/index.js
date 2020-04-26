import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby" // links our database

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const users = props.data.allMongodbGatsbyUsers.edges;
  const meals = props.data.allMongodbGatsbyMeals.edges;
  return (
    <Layout>
    <SEO title="Home" />
    <div className="users-container">
    <h2>Current Users</h2>
    {users.map(user =>
          <div className="user" key={user.node.id}>
              <Link to={'/user/' + user.node.id}>
                  <h2>{user.node.username}</h2>
              </Link>
          </div>
      )}
    </div>
    <div className="meals-container">
    <h2>Meals</h2>
    {meals.map(meal =>
          <div className="meal" key={meal.node.id}>
              <Link to={'/meal/' + meal.node.id}>
                  <h2>{meal.node.type}</h2>
              </Link>
          </div>
      )}
    </div>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbGatsbyUsers {
      edges {
        node {
          id,
          username
        }
      }
    },
    allMongodbGatsbyMeals {
      edges {
        node {
          id,
          type
        }
      }
    }
  }
`