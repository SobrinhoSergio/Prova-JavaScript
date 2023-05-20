

class Produto {
   /* _descricao = '';
    _estoque = 0;
    _preco = 0;*/

  constructor(descricao, estoque, preco) {
    this.descricao = descricao;
    this.estoque = estoque;
    this.preco = preco;
  }

  validar() {
    const erros = [];

   /*if (isNaN(this.id) || this.id <= 0) {
      erros.push("O id deve ser um número positivo.");
    }*/

    if (this.descricao.length < 2 || this.descricao.length > 100) {
      erros.push(
        "A descrição deve ter entre 2 e 100 caracteres."
      );
    }

    if (isNaN(this.estoque) || this.estoque < 0 || this.estoque > 999) {
      erros.push(
        "O estoque deve ser um número entre 0 e 999."
      );
    }

    if (isNaN(this.preco) || this.preco < 1) {
      erros.push(
        "O preço deve ser um número maior ou igual a 1."
      );
    }

    return erros;
  }
}

export default Produto;
