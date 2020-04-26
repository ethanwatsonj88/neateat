module.exports = {
  siteMetadata: {
    title: `neateat`,
    description: `A social media platform to share meals with others.`,
    author: `ethanwatsonj88 & klu17 @github.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
    // The name of the plugin
    resolve: 'gatsby-source-mongodb',
    options: {
        // Name of the database and collection where are books reside
        dbName: 'gatsby',
        collection: ['users', 'meals'],
        server: {
            address: 'cluster0-shard-00-01-mhtd2.mongodb.net',
            port: 27017
        },
        auth: {
            user: 'neateat',
            password: 'yumYelpYum'
        },
        extraParams: {
            replicaSet: 'Cluster0',
            ssl: true,
            authSource: 'admin',
            retryWrites: true
        }
      }
    },      
  ],
}
