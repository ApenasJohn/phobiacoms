import React, { useState } from "react";
import axios from "axios";
import './confirmacao.css';

const Confirmacao = ({ fecharPopup, carrinho, valorTotal }) => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtendo os IDs dos produtos do carrinho
    const idsProdutos = carrinho.map(item => item.ID); // Assumindo que cada item tem um campo 'ID'

    try {
      const response = await axios.post("http://localhost:5000/adicionar-dados", {
        nome,
        whatsapp,
        endereco,
        cep,
        idsProdutos,
        valorTotal,
        dataEnvio: new Date().toISOString() // Adicionando a data do envio
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
        <h3>Confirmação de Pedido</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome Completo:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label>
            Número de WhatsApp:
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
              required
            />
          </label>
          <label>
            Endereço de Entrega:
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </label>
          <label>
            CEP:
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="XXXXX-XXX"
              required
            />
          </label>
          <div className="popup-buttons">
            <button type="submit" className="btn-enviar">Confirmar</button>
            <button type="button" onClick={fecharPopup} className="btn-cancelar">
              Cancelar
            </button>
          </div>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </div>
    </div>
  );
};

export default Confirmacao;
