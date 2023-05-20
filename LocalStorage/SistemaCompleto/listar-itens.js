let produtos = JSON.parse(localStorage.getItem('produtos99')) || [];

const tbody = document.querySelector('tbody');

produtos.forEach((p) => {
  const tr = document.createElement('tr');

  const tdCodigo = document.createElement('td');
  tdCodigo.innerText = p._codigo;
  tr.appendChild(tdCodigo);

  const tdDescricao = document.createElement('td');
  tdDescricao.innerText = p._descricao;
  tr.appendChild(tdDescricao);

  const tdEstoque = document.createElement('td');
  tdEstoque.innerText = p._estoque;
  tr.appendChild(tdEstoque);

  const tdPreco = document.createElement('td');
  tdPreco.innerText = p._preco;
  tr.appendChild(tdPreco);

  const tdExcluir = document.createElement('td'); // criar nova td para o botão de excluir
  const btnExcluir = document.createElement('button'); // criar botão de excluir
  btnExcluir.innerText = 'Excluir'; // adicionar texto ao botão

  btnExcluir.addEventListener('click', () => { // adicionar evento de clique ao botão
    const index = produtos.indexOf(p);
    if (index > -1) {
      produtos.splice(index, 1);
      localStorage.setItem('produtos99', JSON.stringify(produtos));
      tbody.removeChild(tr);
    }
  });
  
  tdExcluir.appendChild(btnExcluir); // adicionar botão de excluir à nova td
  tr.appendChild(tdExcluir); // adicionar nova td à linha tr

  tbody.appendChild(tr);
});
