export default class RepositorioProduto {
    constructor() {
      this.produtos = JSON.parse(localStorage.getItem("produtos1")) || [];
    }
  
    adicionar = (produto) => {
      this.produtos.push(produto);
      localStorage.setItem("produtos1", JSON.stringify(this.produtos));
    };
  
    obterTodos = () => {
      return this.produtos;
    };
  }
  