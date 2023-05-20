import Produto from "./produto2.js";

let produtos = JSON.parse(localStorage.getItem('produtos4')) || [];

document.querySelector('button[type="button"]').addEventListener('click', function(e){

    e.preventDefault();

    // Obtém os valores do formulário
    const descricao = document.querySelector('#descricao').value;
    const estoque = Number(document.querySelector('#estoque').value);
    const preco = Number(document.querySelector('#preco').value);
    
    // Cria um novo objeto produto com os valores obtidos do formulário
    const produto = new Produto(descricao, estoque, preco);
    
    // Valida o objeto produto
    try {
        produto.validar();
        
    } catch (error) {
        if (error instanceof ValorIncorretoError) {
            // Apresenta as mensagens de erro na saída
            const output = document.querySelector('output');
            output.innerHTML = '';
            const mensagemErro = document.createElement('p');
            mensagemErro.textContent = error.message;
            output.appendChild(mensagemErro);
            return;
        }
        throw error;
    }
    
    // Gera o id do produto incrementando o último id cadastrado
    const ultimoId = produtos.length > 0 ? produtos[produtos.length - 1].id : 0;
    const novoId = ultimoId + 1;
    
    // Persiste o produto em localStorage
    produto.id = novoId;
    produtos.push(produto);
    localStorage.setItem('produtos4', JSON.stringify(produtos));
    
    // Apresenta a mensagem de sucesso na saída
    const output = document.querySelector('output');
    output.innerHTML = '';
    const mensagemSucesso = document.createElement('p');
    mensagemSucesso.textContent = 'Produto cadastrado com sucesso.';
    output.appendChild(mensagemSucesso);
});
