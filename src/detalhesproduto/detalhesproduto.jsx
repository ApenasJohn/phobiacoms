import React from "react";
import { useParams } from "react-router-dom";
import useProdutos from "./produtos"; // Importa o hook para acessar os produtos

const DetalhesProduto = () => {
  const { id } = useParams(); // Obtém o índice do produto da URL
  const produtos = useProdutos(); // Busca os produtos
  const produto = produtos[id]; // Obtém o produto correspondente ao índice

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p><strong>Nome:</strong> {produto.Nome}</p>
      <p><strong>Preço:</strong> {produto.Preco}</p>
      <p><strong>Descrição:</strong> {produto.Descricao}</p>
      {/* Adicione mais detalhes conforme necessário */}
    </div>
  );
};

export default DetalhesProduto;
