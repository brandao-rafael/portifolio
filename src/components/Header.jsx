import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render () {
    return (
      <header>
        <Link to="/" className="title-header-link">
          <h1>Portifólio</h1>
        </Link>
        <div>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/about" className="header-link">Sobre</Link>
          <a href="https://github.com/brandao-rafael/trybe-projects" target="_blank" rel="noreferrer" className="header-link">Projetos</a>
          <Link to="/contact" className="header-link">Contato</Link>
        </div>
      </header>
    )
  }
}