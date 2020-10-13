module.exports = {
  siteMetadata: {
    title: 'Edwin García',
    subtitle: 'Software developer',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'ABeeZee',
          'Liu Jian Mao Cao',
          'Roboto',
          'Ubuntu Mono',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
    },
    'gatsby-plugin-react-helmet',
  ],
};
