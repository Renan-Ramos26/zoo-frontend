import CuidadoForm from "../components/CuidadoForm";
import CuidadoList from "../components/CuidadoList";
import { useState } from "react";

function CuidadosPage() {
  const [atualizar, setAtualizar] = useState(false);

  return (
    <div>
      <h1>Cuidados dos Animais</h1>

      <CuidadoForm atualizarLista={() => setAtualizar(!atualizar)} />
      <hr />
      <CuidadoList atualizar={atualizar} />
    </div>
  );
}

export default CuidadosPage;

