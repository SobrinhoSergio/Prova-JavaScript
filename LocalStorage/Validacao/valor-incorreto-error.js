export class ValorIncorretoError extends Error {
    constructor(mensagem) {
      super(mensagem);
      this.name = 'ValorIncorretoError';
    }
  }
  