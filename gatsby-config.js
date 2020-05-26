module.exports = {
  siteMetadata: {
    title: `ManaZoom`,
    description: `보고 싶은 만화 찾을 땐 Manazoom`,
    author: `@gillkyle`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
