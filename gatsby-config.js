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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'drafts',
        path: `${__dirname}/content/drafts`,
        // eslint-disable-next-line no-useless-escape
        ignore: ['**/\.*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
        // eslint-disable-next-line no-useless-escape
        ignore: ['**/\.*'],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gmf: true,
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {},
          },
        ],
      },
    },
  ],
};
