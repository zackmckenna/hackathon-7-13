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
  return (
    <>
      <div
        className="column is-size-2 has-text-weight-bold is-half
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
      <div
        className="column is-half
is-offset-one-quarter"
      >
        <a
          rel="noreferrer"
          target="_blank"
          href={wiki.desktopUrl}
          className="button is-info"
        >
          View on Wikipedia
        </a>
      </div>
    </>
  )
}
