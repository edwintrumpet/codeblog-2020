/* eslint-disable react/no-danger */
import React from 'react';
import { shape as _shape } from 'prop-types';

import useStyles from '../../styles/components/templates/Post';

export default function PostTemplate({ pageContext }) {
  const classes = useStyles();
  const { html, frontmatter: { title } } = pageContext;
  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      <div className={classes.inner} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

PostTemplate.propTypes = {
  pageContext: _shape({}).isRequired,
};
