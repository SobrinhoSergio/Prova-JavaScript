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


//------------------------------------------------

let totalPreco = 0;
let numProdutos = produtos.length;  

/*for (let i = 0; i < numProdutos; i++) {
  totalPreco += produtos[i]._preco;
}*/

produtos.forEach(p => {
    totalPreco += p._preco;
});

const mediaPreco = totalPreco / numProdutos;

const tr = document.createElement('tr');

const preco = document.createElement('td');
preco.innerText = `Total: ${totalPreco}`;
tr.appendChild(preco);

const media = document.createElement('td');
media.innerText = `Média: ${mediaPreco.toFixed(2)}`;
tr.appendChild(media);

tfoot.appendChild(tr);

const btnExcluir = document.querySelectorAll('.btn-excluir');

btnExcluir.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    produtos.splice(index, 1);
    localStorage.setItem('produtos99', JSON.stringify(produtos));
    btn.closest('tr').remove();
    const totalPreco = produtos.reduce((total, p) => total + p._preco, 0);
    const mediaPreco = totalPreco / produtos.length;
    td2.textContent = `Total: ${totalPreco}`;
    td3.textContent = `Média: ${mediaPreco.toFixed(2)}`;
  });
});
