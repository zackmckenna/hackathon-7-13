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

export const Loading = () => {
  return (
    <div
      className="column is-half
    is-offset-one-quarter"
    >
      ...loading
    </div>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  return (
    <div
      className="column is-half
    is-offset-one-quarter"
    >
      no wikipedia entry found for that entry
    </div>
  )
}

export const Success = ({ wiki }) => {
  console.log(JSON.stringify(wiki))
  console.log(wiki)
  console.log(wiki.description)
  return (
    <>
      <div
        className="column is-size-2 is-bold is-half
is-offset-one-quarter"
      >
        {wiki.titles}
      </div>
      <div
        className="column is-half
is-offset-one-quarter"
      >
        {wiki.description}
      </div>
      <div
        className="column is-half
is-offset-one-quarter"
      >
        {wiki.extract}
      </div>
    </>
  )
}
