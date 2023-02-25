import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          &lsaquo;JE/&rsaquo;
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#NavbarSuport"
          aria-controls="NavbarSuport"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="NavbarSuport"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre-mim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experiência
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
