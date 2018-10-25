module.exports = {
    plugins: [`gatsby-plugin-typography`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      }],

    siteMetadata: {
        title: "My first Gatsby Website",
        author: "Julien Regnault",
    }
}