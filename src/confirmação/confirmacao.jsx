import React, { useState } from 'react';
import axios from 'axios';
import './confirmacao.css';

const Confirmacao = ({ fecharPopup, carrinho, valorTotal }) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idsProdutos = carrinho.map(item => item.ID);

    try {
      const response = await axios.post("http://localhost:5173/carrinho", {
        nome,
        whatsapp,
        endereco,
        cep,
        idsProdutos,
        valorTotal,
        dataEnvio: new Date().toISOString()
      });

      setMensagem(`Pedido confirmado! Número do pedido: ${response.data.numeroPedido}`);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setMensagem("Erro ao confirmar o pedido. Tente novamente.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h3>Confirmar Pedido</h3>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <label>WhatsApp:</label>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
          <label>CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <div className="popup-buttons">
            <button type="submit" className="btn-enviar">Enviar</button>
            <button type="button" className="btn-cancelar" onClick={fecharPopup}>Cancelar</button>
          </div>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </div>
    </div>
  );
};

export default Confirmacao;