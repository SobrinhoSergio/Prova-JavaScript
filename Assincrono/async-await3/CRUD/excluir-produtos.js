document.getElementById('remover').addEventListener('click', async () => {
    const tr = document.querySelector('tr.selecionado');
    if (!tr) {
      alert('Selecione uma linha.');
      return;
    }
    const id = tr.dataset.id; // Pega "data-id" da linha
  
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Erro ao remover o produto');
      }
      tr.remove(); // Remove da tabela
    } catch (erro) {
      alert(erro.message);
    }
  });
  