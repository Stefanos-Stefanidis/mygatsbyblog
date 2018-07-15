import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key= { post.node.id }>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
                Posted by {post.node.frontmatter.author}
            </small>
            <br/>
            <small>On {post.node.frontmatter.date}</small>
            <br/>
            <Link to = {post.node.frontmatter.path}>Read More</Link>
            <br/>
            <br/>
            <hr/>
        </div>
    ))}
  </div>
)

export default BlogPage
