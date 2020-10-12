module.exports = {
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
