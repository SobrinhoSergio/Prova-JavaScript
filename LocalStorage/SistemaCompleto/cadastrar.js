import Produto from "./produto.js";

const produtos = JSON.parse(localStorage.getItem('produtos99')) || [];

const cadastrarProduto = (e) => {
  
  e.preventDefault();

  const codigo = Number(document.querySelector('#codigo').value);
  const descricao = document.querySelector('#descricao').value;
  const estoque = Number(document.querySelector('#estoque').value);
  const preco = Number(document.querySelector('#preco').value);

  try {

    const p = new Produto(codigo, descricao, estoque, preco);

    produtos.push(p);

    const produtosString = JSON.stringify(produtos);

    localStorage.setItem('produtos99', produtosString);

    alert("Sucesso");

    location.href = 'listagem.html';

  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    const output = document.querySelector('#output');
    output.innerText = `Erro ao cadastrar produto: ${error.message}`;
  }
}

document.querySelector('#btn-cadastrar').addEventListener('click', cadastrarProduto);
