import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";

function AnimalList({ atualizar }) {
  const [animais, setAnimais] = useState([]);

  function buscarAnimais() {
    axios.get("http://127.0.0.1:8000/animais")
      .then((res) => setAnimais(res.data))
      .catch(() => console.error("Erro ao buscar animais"));
  }

  useEffect(() => {
    buscarAnimais();
  }, [atualizar]); // ⬅ atualiza quando cadastrar

  return (
    <div>
      <h2>Cadastrados:</h2>
      {animais.length === 0 ? (
        <p>Nenhum animal cadastrado.</p>
      ) : (
        animais.map((animal) => (
          <AnimalCard
            key={animal.id}
            nome={animal.nome}
            especie={animal.especie}
            data_nascimento={animal.data_nascimento}
          />
        ))
      )}
    </div>
  );
}

export default AnimalList;
