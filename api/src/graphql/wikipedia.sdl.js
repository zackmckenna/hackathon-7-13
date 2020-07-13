export const schema = gql`
  type Wiki {
    searchString: String!
    titles: String!
    extract: String!
    mobileUrl: String
    desktopUrl: String
    description: String!
    pageId: Int!
  }

  type Query {
    getWiki(searchString: String!): Wiki!
  }
`
