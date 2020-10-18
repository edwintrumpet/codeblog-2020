import { useStaticQuery, graphql } from 'gatsby';

export default function getMetadata() {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query Metadata {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `,
  );

  return siteMetadata;
}
