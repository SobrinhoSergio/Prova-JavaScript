import DominioError from './dominio-error.js';

export default class Produto {
    _codigo = 0;
    _descricao = "";
    _estoque = 0;
    _preco = 0.0;
  
    constructor(codigo, descricao, estoque, preco) {
      this.codigo = codigo;
      this.descricao = descricao;
      this.estoque = estoque;
      this.preco = preco;
    }
  
    get codigo() {
      return this._codigo;
    }
  
    set codigo(value) {
        if (isNaN(value) || value <= 0) {
          throw new DominioError("Código inválido");
        }
        this._codigo = value;
    }
  
    get descricao() {
      return this._descricao;
    }
  
    set descricao(value) {
      if (value.length < 2 || value.length > 100) {
        throw new DominioError("Descrição inválida");
      }
      this._descricao = value;
    }
  
    get estoque() {
      return this._estoque;
    }
  
    set estoque(value) {
        if (isNaN(value) || value < 0 || value > 999) {
          throw new DominioError("Estoque inválido");
        }
        this._estoque = value;
    }
  
    get preco() {
      return this._preco;
    }
  
    set preco(value) {
        if (isNaN(value) || value < 1.0) {
          throw new DominioError("Preço inválido");
        }
        this._preco = value;
    }
  }
  