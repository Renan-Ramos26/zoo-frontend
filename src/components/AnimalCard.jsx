import React, { useState } from "react";
import axios from "axios";

function AnimalCard({ id, nome, especie, data_nascimento, descricao, habitat, pais_origem, atualizarLista }) {
  const [editando, setEditando] = useState(false);
  const [novoNome, setNovoNome] = useState(nome);

  function calcularIdade(data) {
    if (!data) return "N/A";
    const nascimento = new Date(`${data}T00:00:00`);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--;
    return idade;
  }

  function excluirAnimal() {
    axios.delete(`http://127.0.0.1:8000/animais/${id}`)
      .then(() => {
        alert("Animal excluído!");
        atualizarLista();
      })
      .catch(() => alert("Erro ao excluir!"));
  }

  function salvarEdicao() {
    axios.put(`http://127.0.0.1:8000/animais/${id}`, {
      nome: novoNome,
      descricao,
      data_nascimento,
      especie,
      habitat,
      pais_origem
    })
      .then(() => {
        alert("Animal atualizado!");
        setEditando(false);
        atualizarLista();
      })
      .catch(() => alert("Erro ao atualizar!"));
  }

  return (
    <div style={styles.card}>
      {editando ? (
        <input
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          style={styles.input}
        />
      ) : (
        <h3>{nome}</h3>
      )}

      <p><strong>Espécie:</strong> {especie}</p>
      <p><strong>Descrição:</strong> {descricao}</p>
      <p><strong>Habitat:</strong> {habitat}</p>
      <p><strong>Origem:</strong> {pais_origem}</p>
      <p><strong>Idade:</strong> {calcularIdade(data_nascimento)} anos</p>

      {editando ? (
        <button style={styles.btnSalvar} onClick={salvarEdicao}>💾 Salvar</button>
      ) : (
        <button style={styles.btnEditar} onClick={() => setEditando(true)}>✏️ Editar</button>
      )}

      <button style={styles.btnExcluir} onClick={excluirAnimal}>🗑️ Excluir</button>
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
  },
  input: {
    width: "100%",
    padding: "5px",
  },
  btnEditar: {
    marginRight: "5px",
    backgroundColor: "#ffc107",
    border: "none",
    padding: "5px 10px",
  },
  btnSalvar: {
    marginRight: "5px",
    backgroundColor: "#28a745",
    border: "none",
    padding: "5px 10px",
    color: "#fff",
  },
  btnExcluir: {
    backgroundColor: "#dc3545",
    border: "none",
    padding: "5px 10px",
    color: "#fff",
  }
};

export default AnimalCard;
