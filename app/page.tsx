import React from "react";

const page = () => {
  return (
    <main>
      <body className="bg-gray-100">
        <header className="bg-orange-800 p-8 text-gray-100 font-bold sm:text-sm md:text-md lg:text-lg">
          <div className="flex justify-between">
            <div>
              <img src="app/img/logoantipesto.png" alt="Logo AntiPesto" />
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
        <div>
          <section>
            <img
              src="app/img/homepage.png"
              alt="Wallace e Gromit capturando coelhos do jardim"
            />
            <h1>Home</h1>
          </section>
          <section>
            <h1>Sobre a Empresa</h1>
          </section>
          <section>
            <h1>Serviços</h1>
          </section>
          <section>
            <h1>Contato</h1>
          </section>
        </div>
        <footer className="bg-green-800 text-gray-100">
          <h1>Resumo Seções</h1>
        </footer>
      </body>
    </main>
  );
};

export default page;
