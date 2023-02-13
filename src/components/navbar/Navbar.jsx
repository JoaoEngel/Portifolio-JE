import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

      <a className="navbar-brand" href="#">&lsaquo;JE/&rsaquo;</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarSuport" aria-controls="NavbarSuport" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>   
      </button>

      <div className="collapse navbar-collapse" id="NavbarSuport">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre-mim</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Experiência</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projetos</a>
          </li>
        </ul>
      </div>
</div>
  </nav>
  )
}
