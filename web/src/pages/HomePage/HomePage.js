import { Link } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>Find me in "./web/src/pages/HomePage/HomePage.js"</p>
      <button className="button is-primary">Hello</button>
      <p>
        My default route is named "home", link to me with `
        <Link to="home">routes.home()</Link>`
      </p>
    </>
  )
}

export default HomePage
