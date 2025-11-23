import React, { useState } from "react";
import AnimalForm from "../components/AnimalForm";
import AnimalList from "../components/AnimalList";
import CuidadoForm from "../components/CuidadoForm";
import CuidadoList from "../components/CuidadoList";

function Home() {
  const [atualizar, setAtualizar] = useState(false);

  function atualizarTudo() {
    setAtualizar(!atualizar);
  }

  return (
    <div>
      <h1>Jardim Zoológico</h1>
      <p>Bem-vindo ao sistema do Zoo!</p>

      <AnimalForm atualizarLista={atualizarTudo} />
      <AnimalList atualizar={atualizar} />

      <hr />

      <CuidadoForm atualizarLista={atualizarTudo} />
      <CuidadoList atualizar={atualizar} />
    </div>
  );
}

export default Home;
