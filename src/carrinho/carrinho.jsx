import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './carrinho.css'

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    // Recupera o carrinho armazenado no localStorage
    const storedCart = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(storedCart);
  }, []);

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      // Tenta converter item.PREÇO para número e adiciona ao total
      const preco = parseFloat(item.PREÇO);
      if (!isNaN(preco)) {
        return total + preco;
      }
      return total; // Se PREÇO não for válido, apenas retorna o total atual
    }, 0);
  };
  

  // Função para remover item do carrinho
  const removerDoCarrinho = (index) => {
    // Remove o item selecionado
    const novoCarrinho = carrinho.filter((item, i) => i !== index);

    // Atualiza o estado e o localStorage
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  return (
    <div className="listacarrinho">
      {carrinho.length > 0 ? (
        <div>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index} className="item-carrinho">
                <img
                  src={item.IMAGEM}  // Exibindo a imagem armazenada
                  alt={item.NOME}
                  className="imagem-item-carrinho"
                />
                <span>{item.NOME}  R$ {item.PREÇO}</span>
                {/* Botão de remoção */}
                <button
                  onClick={() => removerDoCarrinho(index)}
                  className="btn-remover"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p>Total: R$ {calcularTotal().toFixed(2)}</p>
        </div>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
      <Link to="/home">Voltar à loja</Link>
    </div>
  );
};

export default Carrinho;
