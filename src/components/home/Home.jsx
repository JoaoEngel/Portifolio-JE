import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="header-wraper mt-5" id="home">
      <div className="main-info">
        <h1>OLÁ! EU SOU</h1>
        <h3>
          <Typewriter
            options={{
              strings: ["JOÃO ENGEL"],
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
            }}
            typeSpeed={30}
          />
        </h3>
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
