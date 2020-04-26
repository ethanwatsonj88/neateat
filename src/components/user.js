import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

class Item extends React.Component {
  render() {
    const user = this.props.data.mongodbGatsbyUsers

    return (
      <Layout>
        <div>
          <p>{user.id}</p>
        </div>
      </Layout>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query($id: String!) {
    mongodbGatsbyUsers(id: { eq: $id }) {
      id
    }
  }
`