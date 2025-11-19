import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";

function AnimalList() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
  axios.get("http://127.0.0.1:8000/animais")
    .then((res) => {
      console.log("Resposta da API:", res.data); // 👈 Adicione isso!
      setAnimais(res.data);
    })
    .catch((erro) => console.error("Erro ao buscar animais:", erro));
}, []);

  return (
    <div>
      <h2>Animais cadastrados:</h2>
      {animais.length === 0 ? (
        <p>Nenhum animal cadastrado.</p>
      ) : (
        animais.map((animal) => (
          <AnimalCard
            key={animal.id}
            nome={animal.nome}
            especie={animal.especie}
            idade={"N/A"} // nosso backend ainda não envia idade
          />
        ))
      )}
    </div>
  );
}

export default AnimalList;
