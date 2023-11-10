import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="homepage-link"> HOMEPAGE </Link>
        <Link to="get" className="get-link"> GET </Link>
        <Link className="create-link"> CREATE </Link>
        <Link className="favourites-link"> FAVOURITES </Link>
    </nav>
  )
}

export default Navbar