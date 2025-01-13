import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Confirmacao from "../confirmação/confirmacao";
import './carrinho.css';

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarPopup, setMostrarPopup] = useState(false); // Estado para controlar o pop-up

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(storedCart);
  }, []);

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.PREÇO);
      return !isNaN(preco) ? total + preco : total;
    }, 0);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const abrirPopup = () => setMostrarPopup(true);
  const fecharPopup = () => setMostrarPopup(false);

  return (
    <div className="listacarrinho">
      {carrinho.length > 0 ? (
        <div>
          <ul>
            {carrinho.map((item) => (
              <li key={item.ID} className="item-carrinho"> {/* Usando o item.ID como chave */}
                <img
                  src={item.IMAGEM}
                  alt={item.NOME}
                 className="imagem-item-carrinho"
                />
               <span>{item.NOME} R$ {item.PREÇO}</span>
                <button
                  onClick={() => removerDoCarrinho(item.ID)} // Alterando a remoção do item para usar o ID
                            className="btn-remover"
                            >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p>Total: R$ {calcularTotal().toFixed(2)}</p>
          <button onClick={abrirPopup} className="btn-confirmar">
            Confirmar Pedido
          </button>
        </div>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
      <Link to="/home">Voltar à loja</Link>

      {mostrarPopup && (
        <Confirmacao
          fecharPopup={fecharPopup}
          carrinho={carrinho} // Passando o carrinho para o pop-up
          valorTotal={calcularTotal()} // Passando o total do carrinho
        />
      )}
    </div>
  );
};

export default Carrinho;
