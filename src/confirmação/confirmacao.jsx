import React from "react";
import { useHistory } from "react-router-dom";

const Confirmacao = () => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Pedido confirmado! Em breve entraremos em contato.");
    history.push("/home"); // Redireciona de volta à loja após confirmação
  };

  return (
    <div className="confirmacao-container">
      <h2>Confirmação do Pedido</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" required />
        <label>Endereço:</label>
        <input type="text" name="endereco" required />
        <label>CEP:</label>
        <input type="text" name="cep" required />
        <label>WhatsApp:</label>
        <input type="text" name="whatsapp" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <button type="submit">Confirmar Pedido</button>
      </form>
    </div>
  );
};

export default Confirmacao;
