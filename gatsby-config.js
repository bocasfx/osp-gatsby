module.exports = {
  siteMetadata: {
    title: 'Open Systems Pharmacology',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
};
