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
      if (!isNaN(value) && value > 0) {
        this._codigo = value;
      } 
      else {
          throw new DominioError("Código inválido");
      }
        
    }
  
    get descricao() {
      return this._descricao;
    }
  
    set descricao(value) {
      if (value.length > 2 && value.length < 100) {
        this._descricao = value;
      } 
      else{
        throw new DominioError("Descrição inválida");
      }
    }
  
    get estoque() {
      return this._estoque;
    }
  
    set estoque(value) {
      if (!isNaN(value) && value > 0 && value < 999) {
        this._estoque = value;
      }
      else{
        throw new DominioError("Estoque inválido");
      }   
    }
  
    get preco() {
      return this._preco;
    }
  
    set preco(value) {
        if (!isNaN(value) && value > 1.0) {
          this._preco = value;
        }
        else{
          throw new DominioError("Preço inválido");
        }     
    }
  }
  