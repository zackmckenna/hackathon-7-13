export const schema = gql`
  type Wiki {
    searchParam: String!
    titles: String!
    extract: String!
    mobileUrl: String
    desktopUrl: String
    description: String!
    pageId: Int!
  }

  type Query {
    getWiki(searchParam: String!): Wiki!
  }
`
