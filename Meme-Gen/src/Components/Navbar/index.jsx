import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/"> HOMEPAGE </Link>
        <Link to="get"> GET </Link>
        <Link> CREATE </Link>
        <Link> FAVOURITES </Link>
    </nav>
  )
}

export default Navbar