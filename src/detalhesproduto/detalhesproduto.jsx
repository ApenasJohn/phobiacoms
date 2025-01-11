import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProdutos from "../produtos/produtos";
import './detalhesproduto.css';

const DetalhesProduto = () => {
  const { id } = useParams();
  const produtos = useProdutos();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoEncontrado = produtos.find((p) => p.ID === id);
    setProduto(produtoEncontrado);
  }, [id, produtos]);

  if (!produto) {
    return <p>Carregando produto ou produto não encontrado...</p>;
  }

  const handleAddToCart = () => {
    // Recupera os produtos do carrinho do localStorage, ou cria um array vazio se não houver nada
    const cart = JSON.parse(localStorage.getItem("carrinho")) || [];
  
    // Adiciona o produto ao carrinho com todos os dados, incluindo a imagem
    const produtoComImagem = {
      ...produto,
      IMAGEM: `/images/${produto.IMAGEM}`,  // Garantindo que a imagem tenha o caminho correto
    };
  
    cart.push(produtoComImagem);  // Adiciona o produto ao carrinho
  
    // Armazena o novo carrinho no localStorage
    localStorage.setItem("carrinho", JSON.stringify(cart));
  
    // Emitir evento customizado para notificar sobre a mudança no carrinho
    window.dispatchEvent(new Event('carrinhoAlterado'));
  
    // Exibe uma mensagem indicando que o produto foi adicionado
    alert(`${produto.NOME} adicionado ao carrinho!`);
  };
  

  return (
    <div className="detalhes-produto">
      <h1>{produto.NOME || "Produto Sem Nome"}</h1>
      <div className="detalhes-conteudo">
        <img src={`/images/${produto.IMAGEM}`} alt={produto.NOME} />
        <div className="detalhes-informacoes">
          <p>{produto.DESCRIÇÃO || "Descrição não disponível"}</p>
          <p>R${produto.PREÇO || "Preço não informado"}</p>
        </div>
      </div>
      <div className="adicionar-carrinho">
        {/* Substituindo o botão por uma imagem */}
        <img
          src="/images/add-to-cart.png"
          alt="Adicionar ao Carrinho"
          onClick={handleAddToCart}
          style={{ cursor: 'pointer' }} // Define o cursor como 'pointer' para indicar que é clicável
        />
      </div>
    </div>
  );
};

export default DetalhesProduto;
