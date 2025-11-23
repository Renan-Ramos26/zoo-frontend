import AnimalForm from "../components/AnimalForm";
import AnimalList from "../components/AnimalList";
import { useState } from "react";

function AnimaisPage() {
  const [atualizar, setAtualizar] = useState(false);

  return (
    <div>
      <h1>Animais do Zoológico</h1>

      <AnimalForm atualizarLista={() => setAtualizar(!atualizar)} />
      <hr />
      <AnimalList atualizar={atualizar} />
    </div>
  );
}

export default AnimaisPage;
