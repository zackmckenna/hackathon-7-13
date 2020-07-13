export const QUERY = gql`
  query($searchParam: String!) {
    wiki: getWiki(searchParam: $searchParam) {
      searchParam
      titles
      extract
      description
      pageId
      desktopUrl
      mobileUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ wiki }) => {
  return JSON.stringify(wiki)
}
