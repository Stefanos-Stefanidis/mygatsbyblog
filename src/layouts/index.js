import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Gatsy Course Course Tutorial' },
        { name: 'keywords', content: 'gatsy, tutorial' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <Menu />
    
    <div>
      {children()}
    </div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
