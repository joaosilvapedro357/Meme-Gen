import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div className="home-page">
        <img className="home-logo-image" src="src/assets/logomeme.png" />
        <h1 className="home-title">MEMEZARD</h1>
        <h2 className="home-description">Create your own meme!</h2>
        <Link to="get" className="get-home-button"> START </Link>
    </div>
  )
}

export default Homepage