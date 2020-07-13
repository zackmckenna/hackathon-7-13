const PrettyInput = ({
  handleSubmitSearchParam,
  handleSearchParamInputChange,
}) => {
  return (
    <>
      <div className="field">
        <div className="control">
          <input
            className="input is-primary"
            placeholder="enter a search term"
            onChange={(e) => {
              handleSearchParamInputChange(e)
            }}
          ></input>
        </div>
        {/* <div className="control">
          <a
            onClick={() => handleSubmitSearchParam()}
            className="button is-info"
          >
            Search Wikipedia
          </a>
        </div> */}
      </div>
    </>
  )
}

export default PrettyInput
