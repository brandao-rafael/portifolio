import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render () {
    return (
      <header>
        <Link to="/" className="title-header-link">
          <h2>Portifólio</h2>
        </Link>
        <div>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/about" className="header-link">Sobre</Link>
          <Link to="/projects" className="header-link">Projetos</Link>
          <Link to="/contact" className="header-link">Contato</Link>
        </div>
      </header>
    )
  }
}