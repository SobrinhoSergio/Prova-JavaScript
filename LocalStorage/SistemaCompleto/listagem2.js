const produtos = JSON.parse(localStorage.getItem('produtos99')) || [];

const tbody = document.querySelector('tbody');

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


const btnExcluir = document.querySelectorAll('.btn-excluir');

btnExcluir.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    produtos.splice(index, 1);
    localStorage.setItem('produtos99', JSON.stringify(produtos));
    btn.closest('tr').remove();
  });
});
