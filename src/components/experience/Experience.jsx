import React from "react";
import "./experience.css";
export default function Experience() {
  return (
    <section id="experience">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center text-center">
          <div className="col-sm-4 p-3">
            <h2>Experiência</h2>
            <h5>Desenvolvedor Front-End</h5>
            <p>
              Apesar de já ter atuado em diversas áreas do mercado, dentro e
              fora da minha formação de biólogo licenciado, estou em busca da
              minha primeira oportunidade como desenvolvedor web. Início dos
              estudos Março de 2022-atual{" "}
              <span role="img" aria-labelledby="sparkles">
                &#128522;
              </span>
            </p>
          </div>
          <div className="col-sm-4 p-3">
            <h2>Habilidades</h2>
            <h5>Tecnologias da minha jornada</h5>
            <ul className="list-unstyled">
              <li>
                React JS <i className="fa-brands fa-react"></i>
              </li>
              <li>
                Node JS <i className="fa-brands fa-node-js"></i>
              </li>
              <li>
                Java Script <i className="fa-brands fa-square-js"></i>
              </li>
              <li>
                Git <i className="fa-brands fa-git-alt"></i>
              </li>
              <li>
                GitHub <i className="fa-brands fa-github"></i>
              </li>
              <li>
                HTML <i className="fa-brands fa-html5"></i>
              </li>
              <li>
                CSS <i className="fa-brands fa-css3-alt"></i>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 p-3">
            <h2>Contate-me</h2>
            <h5>Estou disponível para trabalhos</h5>
            <p>Entre em contato comigo, através desse endereço de E-mail:</p>
            <p>
              joaoengel95@gmail.com{" "}
              <span role="img" aria-labelledby="sparkles">
                &#10024;
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
