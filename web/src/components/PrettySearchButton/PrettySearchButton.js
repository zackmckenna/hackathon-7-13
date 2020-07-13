const PrettySearchButton = ({ handleSubmitSearchParam }) => {
  return (
    <div>
      <button
        onClick={() => handleSubmitSearchParam()}
        className="button is-primary is-large"
      >
        Search Wikipedia
      </button>
    </div>
  )
}

export default PrettySearchButton
