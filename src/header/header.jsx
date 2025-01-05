import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          {/* Logo como Link */}
          <Link to="/">
            <img src="src/assets/images/LOGO1.png" alt="logo" />
          </Link>
        </div>
        <div className="sacola">
          {/* Sacola como Link */}
          <Link to="/sacola">
            <img src="src/assets/images/shopping-bag.png" alt="Sacola" />
            <span>3</span>
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