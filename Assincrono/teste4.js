async function consultarProdutos() {
    const response = await fetch('http://localhost/produtos');
  
    if (response.status >= 400) {
      throw new Error('Erro ' + response.status);
    }
  
    return response.json();
  }
  
  (async () => {
    try {
      const produtos = await consultarProdutos();
      exibirProdutos(produtos);
    } catch (err) {
      console.log(err.message);
    }
  })();
  
  function exibirProdutos(produtos) {
    const container = document.getElementById('produtos-container');
  
    produtos.forEach(produto => {
      const produtoElement = document.createElement('div');
      produtoElement.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`;
      container.appendChild(produtoElement);
    });
  }
  