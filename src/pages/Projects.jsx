import React, { Component } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

export default class Projects extends Component {
  render() {
    const projects = [
      {
        name: "Trybe Tunes",
        url: "https://brandao-rafael.github.io/trybe-tunes/",
        src: "https://github.com/brandao-rafael/trybe-tunes/blob/main/images/print/Captura%20de%20tela%20de%202022-10-25%2010-01-03.png?raw=true",
      },
      {
        name:"Solar System",
        url: "https://brandao-rafael.github.io/solar-system/",
        src: "https://github.com/brandao-rafael/solar-system/blob/main/src/images/Captura%20de%20tela%20de%202022-10-25%2010-53-44.png?raw=true",
      }
    ]
    return (
      <div>
        <Header/>
        <h1 className="project-title">Projetos desenvolvidos em React</h1>
        <main className="projects-container">
          {projects.map(({name, url, src}) =>(
            <ProjectCard name={ name } url={ url } src={ src }/>
          ))}
        </main>
      </div>
    )
  }
}
