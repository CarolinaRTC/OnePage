import React from "react";

const Home = () => {
  return (
    <section>
      <h1 className="flex justify-center font-bold text-lg">BEM-teste!</h1>
      <button className="flex bg-orange-800 px-4 py-2 rounded-full text-gray-100 hover:bg-orange-900 font-bold text-lg transition hover:scale-110">
        CONTATO
      </button>
      <img
        className="opacity-60"
        src="img/homepage.png"
        alt="Wallace e Gromit capturando coelhos do jardim"
      />
    </section>
  );
};

export default Home;
