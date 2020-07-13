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
  }

  return (
    <>
      <NavLayout>
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
              <div className="column">
                {searchParam && <WikiCell searchParam={searchParam} />}
              </div>
            </div>
          </div>
        </section>
      </NavLayout>
    </>
  )
}

export default HomePage
