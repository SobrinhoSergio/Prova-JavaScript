const produtos = JSON.parse(localStorage.getItem('produtos99')) || [];

const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

tbody.innerHTML = produtos.map((p) => {
  return `
    <tr>
      <td>${p._codigo}</td>
      <td>${p._descricao}</td>
      <td>${p._estoque}</td>
      <td>${p._preco}</td>
      <td><button class="btn-excluir">Excluir</button></td>
    </tr>
  `;
}).join("");    


const atualizarTfooter = (produtos) => {
  
    let totalPreco = 0;
    let numProdutos = produtos.length;  

    produtos.forEach(p => {
        totalPreco += p._preco;
    });

    const mediaPreco = totalPreco / numProdutos;

    const tr = document.createElement('tr');
    const preco = document.createElement('td');
    const media = document.createElement('td');

    preco.innerText = `Total: ${totalPreco}`;
    media.innerText = `Média: ${mediaPreco.toFixed(2)}`;
    tfoot.innerHTML = '';
    
    tr.appendChild(preco);
    tr.appendChild(media);
    tfoot.appendChild(tr);
}

atualizarTfooter(produtos);

const btnExcluir = document.querySelectorAll('.btn-excluir');

btnExcluir.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    produtos.splice(index, 1);
    localStorage.setItem('produtos99', JSON.stringify(produtos));
    btn.closest('tr').remove();
    atualizarTfooter(produtos);
  });
});
