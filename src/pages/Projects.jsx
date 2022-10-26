import React, { Component } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import projects from '../helpers/project';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1 className="project-title">Alguns projetos desenvolvidos (em construção)</h1>
        <main className="projects-container">
          {projects.map(({name, url, src}) =>(
            <ProjectCard name={ name } url={ url } src={ src }/>
          ))}
        </main>
      </div>
    )
  }
}
