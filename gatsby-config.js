module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        collection: 'users',
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
