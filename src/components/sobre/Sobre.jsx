import React from 'react'
import "./sobre.css"

export default function Sobre() {
  return (
    <div className='sobre'>
      <section className='container p-2'>
        <ul className='list-unstyled'>
          <li className='media'>
            <img src="./assets/images/foto-perfil.png" alt="..." className="img-thumbnail"/>
            <div className='media-body'>
              <h5 className='mt-0 mb-1'>Sobre mim</h5>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
