import { useEffect, useState } from "react";

function ListaAnimais() {
    const [animais, setAnimais] = useState([])
    const [loading, setLoading] = useState(true)

    async function carregarAnimais() {
        try {
            const resposta = await fetch ("http://localhost:8080/animais");
            
        }
    }

}