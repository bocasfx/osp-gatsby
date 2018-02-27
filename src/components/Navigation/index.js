import React from "react"

export default ({ data }) => {
  console.log('Navigation', data)
  if (!data) {
    return null;
  }
  return data.allFile.edges.map(({ node }, index) => {
    return <div>{node.relativePath}</div>
  });
  // return null;
}

export const query = graphql`
  query NavigationQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
