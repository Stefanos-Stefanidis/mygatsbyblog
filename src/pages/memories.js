import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <div className="mr-top--lg">
    <h1>Hi people</h1>
    <div className="imgGrid">
        {data.allFile.edges.map(img => {
        return <Img resolutions={img.node.childImageSharp.resolutions} />
        })}
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query MemoriesImagesQuery {

      # the filter is usefull if you have multiple source-filesystem instances
      # the name "images" is set in the gatsby-config
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            resolutions {
              ...GatsbyImageSharpResolutions
            }
          }
      }
    }
  }
}
`;
