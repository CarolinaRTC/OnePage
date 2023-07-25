import React from "react";

const Header = () => {
  return (
    <header className="bg-orange-800 p-4 text-gray-100 font-bold drop-shadow-lg text-sm">
      <div className="flex justify-between">
        <div>
          <img className="w-1/2" src="img/logoantipesto.png" alt="teste" />
        </div>
        <div>
          <nav>
            <ul>
              <li className="space-x-4">
                <a className="hover:text-gray-400" href="">
                  Home
                </a>
                <a className="hover:text-gray-400" href="">
                  Sobre a Empresa
                </a>
                <a className="hover:text-gray-400" href="">
                  Serviços
                </a>
                <a className="hover:text-gray-400" href="">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
