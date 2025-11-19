import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList() {
  // Temporário: Lista fake de animais (antes do backend)
  const animais = [
    { id: 1, nome: "Leão", especie: "Panthera leo", idade: 8 },
    { id: 2, nome: "Girafa", especie: "Giraffa camelopardalis", idade: 5 },
    { id: 3, nome: "Elefante", especie: "Loxodonta africana", idade: 12 }
  ];

  return (
    <div>
      <h2>Animais cadastrados:</h2>
      {animais.map((animal) => (
        <AnimalCard 
          key={animal.id}
          nome={animal.nome}
          especie={animal.especie}
          idade={animal.idade}
        />
      ))}
    </div>
  );
}

export default AnimalList;
