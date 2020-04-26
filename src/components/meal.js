import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

class Meal extends React.Component {
    render() {
        const meal = this.props.data.mongodbGatsbyMeals
        return (
            <Layout>
                <div>
                    <p>meal type: {meal.type}</p>
                </div>
            </Layout>
        )
    }
}
export default Meal

export const pageQuery = graphql`
  query($id: String!) {
    mongodbGatsbyMeals(id: { eq: $id }) {
      id
      type
    }
  }
`
