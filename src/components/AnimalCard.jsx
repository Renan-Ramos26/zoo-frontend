import React from "react";

function AnimalCard({ nome, especie, data_nascimento }) {
  function calcularIdade(data) {
  if (!data) return "N/A";

  const nascimento = new Date(`${data}T00:00:00`);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}


  return (
    <div style={styles.card}>
      <h3>{nome}</h3>
      <p><strong>Espécie:</strong> {especie}</p>
      <p><strong>Idade:</strong> {calcularIdade(data_nascimento)} anos</p>
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
