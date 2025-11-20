import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";

function AnimalList(props) {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/animais")
      .then((res) => {
        console.log("Resposta da API:", res.data);
        setAnimais(res.data);
      })
      .catch((erro) => console.error("Erro ao buscar animais:", erro));
  }, [props.atualizar]); // 👈 sempre que atualizar muda, faz o GET de novo

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
            idade={"N/A"} // idade calculada será o próximo passo
          />
        ))
      )}
    </div>
  );
}

export default AnimalList;
