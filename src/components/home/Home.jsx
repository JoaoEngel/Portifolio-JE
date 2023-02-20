import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="header-wraper" id="home">
      <div className="main-info">
        <h1>OLÁ! EU SOU</h1>
        <h3>JOÃO ENGEL</h3>
        <h2>DESENVOLVEDOR FRONT-END</h2>
        <br />
        <div className="main-buttons">
          <a
            href="https://www.linkedin.com/in/joao-fabiano-engel-4a04b2160"
            target="_blank"
            className="btn-linkedin"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/JoaoEngel"
            target="_blank"
            className="btn-github"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
