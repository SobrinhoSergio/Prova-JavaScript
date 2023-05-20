import Produto from "./produto.js";

import {RepositorioProduto} from "./repositorio-produto.js";

//produtos = JSON.parse(localStorage('produtos')) || []

const cadastrarProduto = (e) => {
  
  e.preventDefault();

  const codigo = Number(document.querySelector('#codigo').value);
  const descricao = document.querySelector('#descricao').value;
  const estoque = Number(document.querySelector('#estoque').value);
  const preco = Number(document.querySelector('#preco').value);

  const repositorio = new RepositorioProduto();

  try {

    const p = new Produto(codigo, descricao, estoque, preco);

    repositorio.adicionar(p);

    //produtos.push(p)

    //localStorage.setItem('produtos', JSON.stringify(produtos))

    alert("Sucesso");

    location.href = 'listagem.html';

  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    const output = document.querySelector('#output');
    const p = document.createElement('h1');
    p.innerText = `Erro: ${error.message}`;
    output.appendChild(p);
  }
}

document.querySelector('#btn-cadastrar').addEventListener('click', cadastrarProduto);
