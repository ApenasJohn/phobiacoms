
import { Link } from "react-router-dom"; // Importa o Link do React Router
import React, { useState } from "react";
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou API
    console.log("Formulário enviado:", formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="contato-container">
      <h2>contato</h2>
      <hr className="linha-contato" />
      <form onSubmit={handleSubmit} className="contato-form">
        <div className="form-group">
          <label htmlFor="nome">nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">e-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="assunto">assunto:</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">enviar</button>
      </form>
    </div>
  );
}

export default Contato;