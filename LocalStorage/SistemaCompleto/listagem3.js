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

let totalPreco = 0;
let numProdutos = produtos.length;  

for (let i = 0; i < numProdutos; i++) {
  totalPreco += produtos[i]._preco;
}

const mediaPreco = totalPreco / numProdutos;

tfoot.innerHTML = `
  <tr>
    <td colspan="3"></td>
    <td>Total: ${totalPreco}</td>
    <td>Média: ${mediaPreco.toFixed(2)}</td>
  </tr>
`;

const btnExcluir = document.querySelectorAll('.btn-excluir');

btnExcluir.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    produtos.splice(index, 1);
    localStorage.setItem('produtos99', JSON.stringify(produtos));
    btn.closest('tr').remove();
    numProdutos--;
    totalPreco -= p._preco;
    mediaPreco = totalPreco / numProdutos;
    tfoot.innerHTML = `
      <tr>
        <td colspan="3"></td>
        <td>Total: ${totalPreco}</td>
        <td>Média: ${mediaPreco.toFixed(2)}</td>
      </tr>
    `;
  });
});
