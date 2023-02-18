import React from "react";
import "./projects.css";
export default function Projects() {
  return (
    <section id="projects" className="pb-5 text-center">
      <div className="container p-5" />
      <div className="Heading pb-3">Projetos</div>
      <div className="row m-0 pt-4 justify-content-center">
        <div className="col-lg-3 p-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Landing-page com HTML e CSS</h5>
              <p className="card-text">
                Nesse pequeno projeto de estudo, desenvolvi minha primeira
                página estática, usando html e css.
              </p>
              <a
                href="https://github.com/JoaoEngel/Projeto-Primeira-Landing-Page/tree/master"
                target="_blank"
                className="btn btn-primary"
              >
                Repositório Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pokédex com HTML, CSS E JS</h5>
              <p className="card-text">
                Projeto onde desenvolvi uma pokédex, consumindo uma API de
                pokémon, com html, css e java scrtipt
              </p>
              <a
                href="https://github.com/JoaoEngel/Pok-dex---JS.git"
                target="_blank"
                className="btn btn-primary"
              >
                Repositório Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card card-soon">
            <div className="card-body">
              <h5 className="card-title">EM BREVE</h5>
              <p className="card-text">
                Um exemplo de texto rápido para construir o título do card e
                fazer preencher o conteúdo do card.
              </p>
              <a href="#soon" className="btn btn-primary">
                Repositório Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
