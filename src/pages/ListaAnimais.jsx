import { useEffect, useState } from "react";

function ListaAnimais() {
    const [animais, setAnimais] = useState([])
    const [loading, setLoading] = useState(true)

    async function carregarAnimais() {
        try {
            const resposta = await fetch ("http://localhost:8080/animais");
            const dados = await resposta.json()
            setAnimais(dados);
        } catch (erro) {
            console.error("Erro ao carregar animais:", erro);
        }finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        carregarAnimais();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div style={{ padding: 20}}>
            <h1>Lista de Animais</h1>

            {animais.length === 0 ? (
                <p>Nenhum animal cadastrado.</p>
            ) : (
                <ul>
                    {animais.map((animal) => (
                        <li key={animal.id}>
                            <strong>{animal.nome}</strong> - {animal.especie}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaAnimais;
