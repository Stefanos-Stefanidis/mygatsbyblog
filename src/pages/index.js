import React from 'react'
import Link from 'gatsby-link'
import AnimatedTyping from '../components/animated-typing'
import Introduction from '../components/introduction'
import { Icon } from 'react-icons-kit'
import {basic_spread_text} from 'react-icons-kit/linea/basic_spread_text'

const IndexPage = ({data}) => (
	<div>
		<AnimatedTyping animatedTextOne="My code DOESN’T work, I have no idea why" animatedTextTwo="WORKS, I have no idea why" />
		<div id="bg-front-img"></div>
		<Introduction />
		<h1 className="textCenter">Latest Posts</h1>
		<div className="latestPostGrid">
			{data.allMarkdownRemark.edges.map(post => (
                
				<div  className="singlePostFp" key= { post.node.id }>
                    <p className="overlay"></p>

                    <div className="postInfo">
                        <h3 className="postCategory">{post.node.frontmatter.blogCategory}</h3>
                        <div className="moreInfo">
                            <Icon  size={40} icon={basic_spread_text} />
                            <h3 className="postTitle">{post.node.frontmatter.title}</h3>
                            <Link className="readMore" to = {post.node.frontmatter.path}>Read More</Link>
                        </div>
                    </div>
                    <img src={post.node.frontmatter.featuredImage.childImageSharp.sizes.src} />

				</div>
    		))}
		</div>
	</div>
)


export default IndexPage

export const pageQuery = graphql`
 query BlogIndexQuery {
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
      
 }
`