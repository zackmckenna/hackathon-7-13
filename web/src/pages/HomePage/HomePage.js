import { useState } from 'react'
import { Link } from '@redwoodjs/router'
import WikiCell from 'src/components/WikiCell'

const HomePage = () => {
  const [searchParam, setSearchParam] = useState(null)
  const [searchParamInput, setSearchParamInput] = useState('')

  const handleSearchParamInputChange = (e) => {
    e.preventDefault()
    setSearchParamInput(e.target.value)
  }

  const handleSubmitSearchParam = () => {
    setSearchParam(searchParamInput)
  }

  return (
    <>
      <h1>HomePage</h1>
      <p>Find me in "./web/src/pages/HomePage/HomePage.js"</p>
      <input
        onChange={(e) => {
          handleSearchParamInputChange(e)
        }}
      ></input>
      <button
        onClick={() => handleSubmitSearchParam()}
        className="button is-primary"
      >
        Hello
      </button>
      {searchParam && <WikiCell searchParam={searchParam} />}
      <p>
        My default route is named "home", link to me with `
        <Link to="home">routes.home()</Link>`
      </p>
    </>
  )
}

export default HomePage
