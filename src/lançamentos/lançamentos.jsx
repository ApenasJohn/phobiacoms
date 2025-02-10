import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProdutos from "../produtos/produtos";
import './lançamentos.css';

const Lancamentos = () => {
  const produtos = useProdutos("NOVIDADES");

  const produtosVisiveis = produtos.slice(0, 4);

  if (!produtosVisiveis.length) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="lancamentos-container">
      <h1>Lançamentos</h1>
      <div className="produtos-display-lançamentos">
      {produtosVisiveis.map((produto, index) => (
  <div className="produto-item-lançamentos" key={index}>
    <Link to={`/produto/${produto.ID}`}>
      <h3>{produto.NOME || "Produto Sem Nome"}</h3>
      <img src={`/images/${produto.IMAGEM}`} alt={produto.NOME} />
      <p>{produto.DESCRIÇÃO || "Descrição não disponível"}</p>
    </Link>
  </div>
))}
      </div>
      <hr className="linha-lançamentos" />
    </div>
  );
};

export default Lancamentos;
