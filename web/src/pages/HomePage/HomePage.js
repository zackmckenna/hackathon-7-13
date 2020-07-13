import { useState } from 'react'
import { Link } from '@redwoodjs/router'
import WikiCell from 'src/components/WikiCell'
import PrettySearchButton from 'src/components/PrettySearchButton'

import PrettyHeader from 'src/components/PrettyHeader/PrettyHeader'
import PrettyInput from 'src/components/PrettyInput/PrettyInput'
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
      <div className="container">
        <PrettyHeader />
        <div className="column has-text-centered is-centered">
          <PrettyInput
            handleSearchParamInputChange={handleSearchParamInputChange}
          />
        </div>
        <div className="column has-text-centered">
          <PrettySearchButton
            handleSubmitSearchParam={handleSubmitSearchParam}
          />
        </div>
        {searchParam && <WikiCell searchParam={searchParam} />}
      </div>
    </>
  )
}

export default HomePage
