import React, { useState } from "react";
import AnimalList from "../components/AnimalList";
import AnimalForm from "../components/AnimalForm";

function Home() {
  const [atualizarLista, setAtualizarLista] = useState(false);

  return (
    <div>
      <h1>Jardim Zoológico</h1>
      <p>Bem-vindo ao sistema do Zoo!</p>

      {/* Passa a função para o formulário */}
      <AnimalForm onAnimalCadastrado={() => setAtualizarLista(!atualizarLista)} />

      <hr />

      {/* Passa o estado como sinal para a lista */}
      <AnimalList atualizar={atualizarLista} />
    </div>
  );
}

export default Home;
