import { salvarSelecao } from "./selecoes.js";

document.getElementById('salvar').addEventListener('click', ev => {
    ev.preventDefault();
    const nome = document.getElementById('pais').value;
    salvarSelecao(nome)
        .then(() => alert('Salvo com sucesso!'))
        .catch((err) => alert(err.message));
});
