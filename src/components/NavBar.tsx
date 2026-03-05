import { Link } from "react-router-dom"
import './NavBar.css'

export default function navBar() {
  return (
    <div className="vcontainer navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/tech">Tech</Link >
      <Link to="/posts">Dev Logs</Link >
    </div>
  )
}
