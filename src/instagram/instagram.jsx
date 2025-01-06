import { Link } from "react-router-dom"; 
import React from "react";
import './instagram.css';

function Instagram() {
    return (
      <div className="instagram-container"> {/* Class name para aplicar o estilo depois */}
        {/* Texto à esquerda */}
        <div className="texto-esquerdo"> {/* Class name para aplicar o estilo depois */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Janela do Instagram à direita */}
        <div className="janela-instagram"> {/* Class name para aplicar o estilo depois */}
          <iframe 
            src="https://www.instagram.com/phobiacoms/embed"
            width="300" 
            height="400" 
            frameBorder="0" 
            scrolling="no" 
            allowtransparency="true"
            title="Instagram Profile"
          ></iframe>
        </div>
      </div>
    );
}

export default Instagram;
