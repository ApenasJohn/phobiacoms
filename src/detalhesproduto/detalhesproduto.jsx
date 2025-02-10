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

    const cart = JSON.parse(localStorage.getItem("carrinho")) || [];
  
    const produtoComImagem = {
      ...produto,
      IMAGEM: `/images/${produto.IMAGEM}`, 
    };
  
    cart.push(produtoComImagem);
  
    localStorage.setItem("carrinho", JSON.stringify(cart));
  
    window.dispatchEvent(new Event('carrinhoAlterado'));
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
        <img
          src="/images/add-to-cart.png"
          alt="Adicionar ao Carrinho"
          onClick={handleAddToCart}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default DetalhesProduto;
