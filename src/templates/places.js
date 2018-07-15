import React from 'react'
import Link from 'gatsby-link'
import HeadImg from '../images/headImg.jpg'
import FadeIn from 'react-fade-in'
import { Icon } from 'react-icons-kit'
import {arrows_up} from 'react-icons-kit/linea/arrows_up'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
        <FadeIn>
            <section style={ header } />
        </FadeIn>
        <h1>places</h1>
        <div className="container">
            <h2 className="entryTitle">{post.frontmatter.title}</h2>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="metaWrapper">
                <p>
                    By <span className="linkColor">{post.frontmatter.author}</span> | <span className="linkColor">{post.frontmatter.date}</span> | category: <span className="linkColor">{post.frontmatter.blogCategory}</span>
                </p>
            </div>
            <div className="backToTop">
                <Icon onClick={scrollToTop} size={80} icon={arrows_up} />
            </div>
        </div>

    </div>
  )
  
    function scrollToTop() {
        window.scrollTo(0, 0)

    }
}
var header = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${HeadImg})`
  };

  
export const postQuery = graphql`
  query PlacesPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        blogCategory
      }
    }
  }
`
