import React from 'react';
import { graphql } from 'gatsby';

import useStyles from '../styles/pages/index';
import { Card } from '../components/organisms';

export default function index({ data }) {
  const classes = useStyles();

  const { edges } = data.allFile;

  const cards = edges
    .filter((edge) => {
      if (process.env.NODE_ENV === 'development') {
        return true;
      }
      return edge.node.sourceInstanceName === 'posts';
    })
    .sort((a, b) => {
      const pathA = a.node.relativeDirectory;
      const pathB = b.node.relativeDirectory;
      if (pathA > pathB) return -1;
      if (pathA < pathB) return 1;
      return 0;
    })
    .map(({ node }) => (
      <Card post={node} key={node.id} />
    ));

  return (
    <section className={classes.container}>
      {cards}
    </section>
  );
}

export const query = graphql`
  query Posts {
  allFile {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            author
            cover
            title
            tags
          }
          excerpt(truncate: false, pruneLength: 200)
        }
        id
        relativeDirectory
      }
    }
  }
}
`;
