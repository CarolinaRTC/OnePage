import React from "react";

const page = () => {
  return (
    <main>
      <body>
        <header className="bg-orange-800 text-white p-8">
          <div className="flex">
            <div>
              <img src="app/img/logoantipesto.png" alt="Logo AntiPesto" />
            </div>
            <div>
              <nav>
                <ul>
                  <li className="text-lg font-bold">
                    <a href="">Home</a>
                    <a href="">Sobre a Empresa</a>
                    <a href="">Serviços</a>
                    <a href="">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div>
          <section>
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
        <footer>
          <h1>Resumo Seções</h1>
        </footer>
      </body>
    </main>
  );
};

export default page;
