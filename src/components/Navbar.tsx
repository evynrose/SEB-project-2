import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-light has-text-success">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/CatBreeds" className="navbar-item">
                Cat Breeds
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar