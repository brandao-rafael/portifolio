import React, { Component } from "react";
import Header from "../components/Header";
import profile2 from "../assets/profile2.jpeg"

export default class Home extends Component {
  render() {
    return (
      <><Header /><main className="main-home">
        <img src={ profile2 } alt="profile" className="profile-pic"/>
        <div className="presentation-text">
          <h2><strong>Olá</strong>, meu nome é Rafael Brandão, sou estudante de desenvolvimento web full-stack pela escola
            <a href="https://www.betrybe.com/">
              <img src="https://static.wixstatic.com/media/4c2984_e8ba75672946447b9c0718f98d806496~mv2.png/v1/fit/w_522%2Ch_132%2Cal_c/file.png" alt="trybe logo" className="trybe-logo"/>
            </a>.
          </h2>
        </div>
      </main></>
    )
  }
}