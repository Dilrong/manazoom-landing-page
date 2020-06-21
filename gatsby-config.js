module.exports = {
  siteMetadata: {
    title: `ManaZoom`,
    description: `보고 싶은 만화 찾을 땐 Manazoom`,
    author: `@Dilrong`,
    siteUrl: `https://forms.gle/FPeZ1S9Kwx894jcL6`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167774314-1",
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
