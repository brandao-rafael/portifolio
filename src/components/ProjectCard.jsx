import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render() {
    const {name, url, src} = this.props; 
    return (
      <div className="card-item">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={ src } alt="Project preview"/>
          <div class="card-body">
            <h5 class="card-title">{ name }</h5>
            <a href={ url } class="btn btn-outline-primary" target="_blank" rel="noreferrer">Acessar Projeto</a>
          </div>
        </div>
      </div>
    )
  }
}
