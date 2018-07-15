import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allFile.edges.map(img => {
      return <Img resolutions={img.node.childImageSharp.resolutions} />
      })}
    <Link to="/page-2/">Go to page 2</Link>

    			{data.allMarkdownRemark.edges.map(post => (
                
				<div  className="singlePostFp" key= { post.node.id }>

                    <img src={post.node.frontmatter.featuredImage.childImageSharp.sizes.src} />

				</div>
    		))}
  </div>
)

export default IndexPage

export const query = graphql`
  query ImagesQuery {
    allMarkdownRemark (
        limit: 6
        filter: {frontmatter: {published: {eq: true}}}
        #filter: { frontmatter: { published: { eq: true }, category: { eq: true } } } 
        sort: {fields: [frontmatter___date], order: DESC}
      ){
        edges {
          node {
              id
              frontmatter {
              path
              title
              blogCategory
              featuredImage{
                  childImageSharp{
                      sizes(maxWidth: 400 maxHeight: 250) {
                                  src
                              }
                  }
              }
            }
          }
        }
      }
      # the filter is usefull if you have multiple source-filesystem instances
      # the name "images" is set in the gatsby-config
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            resolutions(width: 125, height: 125) {
              ...GatsbyImageSharpResolutions
            }
          }
      }
    }
  }
}
`;
