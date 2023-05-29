document.getElementById('remover').addEventListener('click', () => {
    const tr = document.querySelector('tr.selecionado');
    if (!tr) {
        alert('Selecione uma linha.');
        return;
    }
    const id = tr.dataset.id; // Pega "data-id" da linha
    fetch(`http://localhost:3000/produtos/${id}`, { method: 'DELETE' })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao remover o produto');
            }
            tr.remove(); // Remove da tabela
        })
        .catch((erro) => alert(erro.message));
});
