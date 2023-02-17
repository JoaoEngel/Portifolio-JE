import React from 'react';
import "./about.css"
import ME from "../../assets/images/foto-perfil.png";
export default function About() {
  return (
    <div className='padding pt-5 pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 pb-5'>
          <img src={ME} alt="Foto-perfil-JE"/>
          </div>
          <div className='col-sm-6 text-center'>
            <h2>Sobre mim</h2>
            <p className='lead'>Seja bem vindo(a)! Eu me chamo João Fabiano Engel, tenho 28 anos e sou formado em ciências biológicas licenciatura. Mesmo sendo apaixonado por biologia e ciências no geral, em 2021 resolvi seguir uma outra paixão, a área de TI, desde então tenho me dedicado á estudar programação com muitos sonhos e objetivos há serem alcançados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}