import React from "react";
import "./about.css";
import ME from "../../assets/images/foto-perfil.png";
export default function About() {
  return (
    <div className="padding pt-5 pb-5" id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 pt-3">
            <img
              src={ME}
              alt="Foto-perfil-JE"
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-sm-6 text-center pt-3">
            <h2>Sobre mim</h2>
            <p className="lead">
              Seja bem vindo(a)! Eu me chamo João Fabiano Engel, tenho 28 anos e
              sou formado em ciências biológicas licenciatura. Mesmo sendo
              apaixonado por biologia e ciências no geral, em 2022 resolvi
              seguir uma outra paixão, a área de Programação, desde então tenho
              me dedicado a estudar as tecnologias e suas funcionalidades, com
              muitos sonhos e objetivos há serem alcançados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
