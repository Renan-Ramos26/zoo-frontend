import React, { useState } from "react";
import axios from "axios";

function AnimalForm({ onAnimalCadastrado }) {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    data_nascimento: "",
    especie: "",
    habitat: "",
    pais_origem: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/animais", formData)
      .then(() => {
        alert("Animal cadastrado com sucesso!");
        
        if (onAnimalCadastrado) onAnimalCadastrado(); // 🚀 Atualiza lista automaticamente!

        setFormData({
          nome: "",
          descricao: "",
          data_nascimento: "",
          especie: "",
          habitat: "",
          pais_origem: ""
        });
      })
      .catch(() => alert("Erro ao cadastrar animal!"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Animal</h2>

      <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
      <input name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
      <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} required />
      <input name="especie" placeholder="Espécie" value={formData.especie} onChange={handleChange} required />
      <input name="habitat" placeholder="Habitat" value={formData.habitat} onChange={handleChange} required />
      <input name="pais_origem" placeholder="País de origem" value={formData.pais_origem} onChange={handleChange} required />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default AnimalForm;

