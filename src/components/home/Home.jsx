import React from 'react'
import "./home.css"
import Typed from 'react-typed';



export default function Home() {
  return (
  <div className="header-wraper" id='home'>
    <div className="main-info">
      <h1>OLÁ! EU SOU</h1>
      <Typed
      className='typed-text'
      strings={["JOÃO ENGEL"]}
      typeSpeed={150}
      backSpeed={100}
      loop
      />
    <h2>DESENVOLVEDOR FRONT-END</h2>
    <br />
    <div className='main-buttons'>
    <a href='https://www.linkedin.com/in/joao-fabiano-engel-4a04b2160' target="_blank" className='btn-linkedin'>Linkedin</a>
    <a href='https://github.com/JoaoEngel' target="_blank" className='btn-github'>Github</a>
    </div>
    </div>
  </div>
  )
}
