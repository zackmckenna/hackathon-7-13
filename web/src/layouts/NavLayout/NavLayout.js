const NavLayout = ({
  children,
  handleSearchParamInputChange,
  handleSubmitSearchParam,
}) => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <p className="has-text-weight-bold has-text-primary">prettypedia</p>
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a
              href="https://www.mintbean.io/mb-event/c45466cb-05d2-4472-8cb5-e78cdc5f5aff"
              className="navbar-item"
            >
              Mintbean Hackathon 7-13
            </a>
            <a href="https://zackmckenna.com" className="navbar-item">
              made by zackmckenna
            </a>
          </div>

          {/* <div className="navbar-end">
            <div className="navbar-item">
              <input
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
          </div> */}
        </div>
      </nav>
      {children}
    </>
  )
}

export default NavLayout
