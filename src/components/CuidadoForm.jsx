import React, { useState, useEffect } from "react";
import axios from "axios";

function CuidadoForm({ atualizarLista }) {
  const [animais, setAnimais] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    data: "",
    animal_id: "",
  });

  // Buscar animais para mostrar no select
  useEffect(() => {
    axios.get("http://localhost:8000/animais").then((res) => {
      setAnimais(res.data);
    });
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/cuidados", form)
      .then(() => {
        setForm({ nome: "", descricao: "", data: "", animal_id: "" });
        atualizarLista(); // atualiza a lista quando cadastra
      })
      .catch(() => alert("Erro ao cadastrar cuidado!"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Cuidado</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome do cuidado"
        value={form.nome}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="data"
        value={form.data}
        onChange={handleChange}
        required
      />

      <select
        name="animal_id"
        value={form.animal_id}
        onChange={handleChange}
        required
      >
        <option value="">Selecione um Animal</option>
        {animais.map((animal) => (
          <option key={animal.id} value={animal.id}>
            {animal.nome}
          </option>
        ))}
      </select>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CuidadoForm;
