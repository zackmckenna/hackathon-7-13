const PrettyInput = ({ handleSearchParamInputChange }) => {
  return (
    <>
      <div className="field">
        <div className="control">
          <input
            className="input is-primary"
            onChange={(e) => {
              handleSearchParamInputChange(e)
            }}
          ></input>
        </div>
      </div>
    </>
  )
}

export default PrettyInput
