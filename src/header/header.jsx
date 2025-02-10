import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  useEffect(() => {
    const atualizarCarrinho = () => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      setQuantidadeCarrinho(carrinho.length);
    };

    atualizarCarrinho();

    window.addEventListener("carrinhoAlterado", atualizarCarrinho);

    return () => {
      window.removeEventListener("carrinhoAlterado", atualizarCarrinho);
    };
  }, []); 

  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          <Link to="/">
            <img src="/images/LOGO1.png" alt="logo" />
          </Link>
        </div>
        <div className="carrinho">
          <Link to="/carrinho">
            <img src="/images/shopping-bag.png" alt="Sacola" />
            <span>{quantidadeCarrinho}</span>
          </Link>
        </div>
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
