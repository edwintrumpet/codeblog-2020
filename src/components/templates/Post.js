/* eslint-disable react/no-danger */
import React from 'react';
import { shape as _shape } from 'prop-types';

export default function PostTemplate({ pageContext }) {
  const { html, frontmatter: { title } } = pageContext;
  return (
    <div>
      <h1>{title}</h1>
      <div className="post__inner" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

PostTemplate.propTypes = {
  pageContext: _shape({}).isRequired,
};
