import { graphql, useStaticQuery } from 'gatsby';

export default function getMetadata() {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query Metadata {
        site {
          siteMetadata {
            subtitle
            title
          }
        }
      }
    `,
  );

  return siteMetadata;
}
