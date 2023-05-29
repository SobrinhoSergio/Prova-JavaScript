fetch('http://localhost:3000/produtos')
    .then(tratarResposta)
    .then(tratarProdutos)
    .catch(tratarErro);

function tratarResposta(response) {
    if (!response.ok) {
        throw new Error('Erro ao consultar os produtos.');
    }
    return response.json();
}

function tratarProdutos(produtos) {
    document.querySelector('tbody').innerHTML =
        produtos
            .map(
                (p) => `
                    <tr onclick="selecionar(${p.id})" data-id="${p.id}" >
                        <td>${p.id}</td>
                        <td>${p.descricao}</td>
                        <td>${p.estoque}</td>
                    </tr>
                `
            )
            .join('\n');
}

function tratarErro(erro) {
    alert(erro.message);
}

function selecionar(id) {
    const tr = document.querySelector(`tr[data-id="${id}"]`);
    tr.classList.toggle('selecionado');
}
