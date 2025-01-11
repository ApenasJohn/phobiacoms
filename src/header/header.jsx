import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  useEffect(() => {
    // Função para atualizar a quantidade do carrinho
    const atualizarCarrinho = () => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      setQuantidadeCarrinho(carrinho.length); // Atualiza a quantidade de itens no carrinho
    };

    // Inicializa o carrinho ao montar o componente
    atualizarCarrinho();

    // Escuta por mudanças no evento customizado 'carrinhoAlterado'
    window.addEventListener("carrinhoAlterado", atualizarCarrinho);

    // Limpeza do event listener ao desmontar o componente
    return () => {
      window.removeEventListener("carrinhoAlterado", atualizarCarrinho);
    };
  }, []); // Esse efeito é executado uma vez, quando o componente é montado

  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          {/* Logo como Link */}
          <Link to="/">
            <img src="/images/LOGO1.png" alt="logo" />
          </Link>
        </div>
        <div className="carrinho">
          {/* Sacola como Link, exibe a quantidade de itens */}
          <Link to="/carrinho">
            <img src="/images/shopping-bag.png" alt="Sacola" />
            <span>{quantidadeCarrinho}</span>
          </Link>
        </div>
        {/* Links de navegação */}
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/adesivos">Adesivos</Link>
          <Link to="/prints">Prints</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
