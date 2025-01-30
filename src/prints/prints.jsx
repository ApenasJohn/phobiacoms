import { Link } from "react-router-dom"; 
import React from "react";
import useProdutos from "../produtos/produtos"; // Hook para pegar os produtos

const Prints = () => {
  const produtos = useProdutos("GLOBAL"); // Modifique conforme necessário para pegar todos os produtos
  const produtosExibidos = produtos.slice(0, 8); // Pega apenas os 8 primeiros produtos

  return (
    <div className="produtos-list-container">
      <div className="produtos-display-produtos">
        {produtosExibidos.map((produto) => (
          <div className="produto-item-produtos" key={produto.ID}>
            <h3>{produto.NOME || "Produto Sem Nome"}</h3>
            <Link to={`/produto/${produto.ID}`}>
              <img src={`/images/${produto.IMAGEM}`} alt={produto.NOME} />
            </Link>
            <p>{produto.DESCRIÇÃO || "Descrição não disponível"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prints;