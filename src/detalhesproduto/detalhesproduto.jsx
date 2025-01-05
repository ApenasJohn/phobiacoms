import React from 'react';
import { useParams } from 'react-router-dom';

const DetalhesProduto = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  // Aqui você pode usar o id para buscar as informações detalhadas do produto
  return (
    <div>
      <h2>Detalhes do Produto {id}</h2>
      {/* Aqui você pode exibir os detalhes do produto */}
    </div>
  );
};

export default DetalhesProduto;
