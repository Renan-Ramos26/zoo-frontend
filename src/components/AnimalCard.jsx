import React from "react";

function AnimalCard({ nome, especie, idade }) {
  return (
    <div style={styles.card}>
      <h3>{nome}</h3>
      <p><strong>Espécie:</strong> {especie}</p>
      <p><strong>Idade:</strong> {idade} anos</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px 0",
    backgroundColor: "#f9f9f9",
  }
};

export default AnimalCard;