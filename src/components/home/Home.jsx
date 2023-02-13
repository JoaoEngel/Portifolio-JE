import React from 'react'
import "./home.css"

export default function Home() {
  return (
  <div className='home mt-3'>
      <div className='jumbotron'>
        <h1 className='display-4'>Olá, Eu sou João Engel</h1>
        <h2>Desenvolvedor Front-End</h2>
        <a className='btn btn-outline-primary' href="https://www.linkedin.com/in/joao-fabiano-engel-4a04b2160" target="_blank" role="button">Linkedin</a>
        <a className='btn btn-outline-primary' href="https://github.com/JoaoEngel" target="_blank" role="button">Github</a>
    </div>
  </div>
  )
}
