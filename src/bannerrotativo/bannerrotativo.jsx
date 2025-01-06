import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usando React Router para navegação
import useProdutos from "../produtos/produtos";
import './bannerrotativo.css'; // Importando o arquivo de estilo

const Carrossel = () => {
  const produtos = useProdutos(); // Puxa os dados da aba GLOBAL
  const [index, setIndex] = useState(0);

  const produtosPorTela = () => {
    if (window.innerWidth <= 600) {
      return 1; // Exibe 1 produto para telas menores
    } else if (window.innerWidth <= 1024) {
      return 2; // Exibe 2 produtos para telas médias
    } else {
      return 4; // Exibe 4 produtos para telas maiores
    }
  };

  const produtosVisiveis = produtos.slice(index, index + produtosPorTela());

  const proximoProduto = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (produtos.length - produtosPorTela() + 1));
  };

  const produtoAnterior = () => {
    setIndex((prevIndex) => (prevIndex - 1 + produtos.length - produtosPorTela() + 1) % (produtos.length - produtosPorTela() + 1));
  };

  return (
    <div className="carrossel-container">
      <button className="seta seta-esquerda" onClick={produtoAnterior}>
        <img src="src/assets/images/left-arrow.png" alt="Seta Esquerda" />
      </button>
      
      <div className="produtos-display-carrossel">
        {produtosVisiveis.map((produto) => (
          <div className="produto-item-carrossel" key={produto.ID}>
            <Link to={`/produto/${produto.ID}`} style={{ textDecoration: 'none' }}>
              <h3>{produto.NOME}</h3>
              <img src={`/images/${produto.IMAGEM}`} alt={produto.NOME} />
              <p>{produto.DESCRIÇÃO}</p>
            </Link>
          </div>
        ))}
      </div>

      <button className="seta seta-direita" onClick={proximoProduto}>
        <img src="src/assets/images/right-arrow.png" alt="Seta Direita" />
      </button>
    </div>
  );
};

export default Carrossel;
