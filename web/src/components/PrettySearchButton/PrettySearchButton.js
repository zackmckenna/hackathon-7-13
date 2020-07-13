const PrettySearchButton = ({ handleSubmitSearchParam }) => {
  return (
    <div>
      <button
        onClick={() => handleSubmitSearchParam()}
        className="button is-info is-medium"
      >
        Search Wikipedia
      </button>
    </div>
  )
}

export default PrettySearchButton
