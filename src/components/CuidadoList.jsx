import React, { useEffect, useState } from "react";
import axios from "axios";

function CuidadoList({ atualizar }) {
  const [cuidados, setCuidados] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/cuidados").then((res) => {
      setCuidados(res.data);
    });
  }, [atualizar]);

  return (
    <div>
      <h2>Cuidados Registrados</h2>
      <ul>
        {cuidados.map((c) => (
          <li key={c.id}>
            <strong>{c.nome}</strong> - {c.descricao} ({c.data})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CuidadoList;
