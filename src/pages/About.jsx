import React, { Component } from "react";
import Header from "../components/Header";

export default class About extends Component {
  render() {
    return (
      <><Header /><main className="about-container">
        <h2>Sobre mim</h2>
        <p>
          Atualmente estou estudando desenvolvimento web full-stack pela escola Trybe, conclusão prevista para
          junho de 2021.
          <br />
          O programa conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software,
          front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades
          comportamentais.
        </p>
        <div className="skills-container">
          <ul className="skills">
            <h4>Minhas Habilidades</h4>
            <li>React</li>
            <li>Javascript</li>
            <li>Fotografia</li>
            <li>Redux</li>
            <li>Métodologias ágeis</li>
          </ul>
          <ul className="skills">
            <h4>Habilidades em desenvolvimento</h4>
            <li>Banco de dados</li>
            <li>Python</li>
            <li>Rest</li>
            <li>Server-side</li>
            <li>Autenticação</li>
            <li>Segurança</li>
            <li>Deploy</li>
          </ul>
        </div>
      </main></>
    )
  }
}