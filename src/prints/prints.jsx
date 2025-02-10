import { Link } from "react-router-dom"; 
import React from "react";
import useProdutos from "../produtos/produtos"; 

const Prints = () => {
  const produtos = useProdutos("GLOBAL"); 
  const produtosExibidos = produtos.slice(0, 8);

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