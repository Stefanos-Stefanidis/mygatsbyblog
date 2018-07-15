module.exports = {
  siteMetadata: {
    title: 'Gatsby Crash Course',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`, // you can use multiple source-filesystem instances
          path: `${__dirname}/postImages/`,
        },
      },
    {
    resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
          ],
        },
      },

    'gatsby-transformer-remark',
  ],
  
  
}
