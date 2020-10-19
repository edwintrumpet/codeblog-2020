const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const slug = `/${fileNode.relativeDirectory.split('--')[1]}/`;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/components/templates/Post.js');
  const posts = [];

  const result = await graphql(`
    query GET_POSTS {
      allFile {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
                author
                tags
                cover
              }
              html
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allFile.edges.forEach((element) => {
    const item = element.node.childMarkdownRemark;
    if (item) posts.push(item);
  });

  posts.forEach((element) => {
    createPage({
      path: `${element.fields.slug}`,
      component: postTemplate,
      context: element,
    });
  });
};
