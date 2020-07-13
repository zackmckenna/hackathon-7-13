import { useState } from 'react'
import { Link } from '@redwoodjs/router'
import WikiCell from 'src/components/WikiCell'
import PrettySearchButton from 'src/components/PrettySearchButton'
import NavLayout from 'src/layouts/NavLayout'

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
    setSearchParamInput('')
  }

  return (
    <>
      <NavLayout
        handleSubmitSearchParam={handleSubmitSearchParam}
        handleSearchParamInputChange={handleSearchParamInputChange}
      >
        <section className="hero is-bold is-fullwidth is-fullheight is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1 has-text-centered">prettypedia</h1>
              <h2 className="subtitle has-text-centered">pretty. simple.</h2>

              {!searchParam && (
                <div>
                  <div
                    className="column is-half
is-offset-one-quarter"
                  >
                    <PrettyInput
                      handleSubmitSearchParam={handleSubmitSearchParam}
                      handleSearchParamInputChange={
                        handleSearchParamInputChange
                      }
                    />
                  </div>
                  <div className="column has-text-centered">
                    <PrettySearchButton
                      handleSubmitSearchParam={handleSubmitSearchParam}
                    />
                  </div>
                </div>
              )}

              <div className="column m-b-3">
                {searchParam && <WikiCell searchParam={searchParam} />}
              </div>
              <div className="column">
                {searchParam && (
                  <div className="column is-half is-offset-one-quarter">
                    <div className="navbar-item">
                      <input
                        placeholder="search again"
                        onChange={(e) => handleSearchParamInputChange(e)}
                        className="input m-r-1 has-addons"
                      ></input>
                      <a
                        onClick={() => handleSubmitSearchParam()}
                        className="button is-info"
                      >
                        <strong>Search</strong>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </NavLayout>
    </>
  )
}

export default HomePage
