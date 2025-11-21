import React, { useState } from "react";
import AnimalForm from "../components/AnimalForm";
import AnimalList from "../components/AnimalList";

function Home() {
  const [atualizar, setAtualizar] = useState(false);

  function atualizarLista() {
    setAtualizar(!atualizar); // força atualização na lista
  }

  return (
    <div>
      <h1>Jardim Zoológico</h1>
      <p>Bem-vindo ao sistema do Zoo!</p>

      <AnimalForm atualizarLista={atualizarLista} />
      
      <hr />

      <AnimalList atualizar={atualizar} />
    </div>
  );
}

export default Home;
