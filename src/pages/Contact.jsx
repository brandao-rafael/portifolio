import React from "react";
import Header from "../components/Header";
import { send } from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Rafael',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_924wmdr',
      'template_pzphp2n',
      toSend,
      'mQbogzUY_hY3HD0ym'
    )
      .then((response) => {
        alert('Email enviado com sucesso');
        console.log(response.status, response.text);
      })
      .catch((err) => {
        alert('Por favor tente novamente mais tarde...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <main className="contact-container">
      <Header />
      <h2>Contatos</h2>
      <div className="contact-links">
        <a href="https://www.instagram.com/pyhbmx/" className="contact-link" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" className="contact-logo" alt="instagram logo"/>
        </a>
        <a href="https://www.linkedin.com/in/rafael-brand%C3%A3o-a09494238/" className="contact-link" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="contact-logo" alt="linkedin logo"/>
        </a>
        <a href="https://github.com/brandao-rafael" className="contact-link" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png?w=360" className="contact-logo" alt="linkedin logo"/>
        </a>
      </div>
      <fieldset>
        <form onSubmit={onSubmit} className="form-container">
          <h2 className="email-form-title">Envie um email</h2>
          <label htmlFor="fromName" className="form-label">
            Digite seu nome:
            <input
              className="form-control"
              id='fromName'
              type='text'
              name='from_name'
              placeholder='Seu nome'
              value={send.from_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="userEmail" className="form-label">
            Digite seu email:
            <input
              className="form-control"
              id='userEmail'
              type='text'
              name='reply_to'
              placeholder='Seu email'
              value={send.reply_to}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message" className="form-label">
            Digite sua mensagem:
            <textarea
              className="form-control"
              id='message'
              name='message'
              placeholder='Sua mensagem'
              value={send.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-outline-success">Enviar</button>
        </form>
      </fieldset>
    </main>
  )
}