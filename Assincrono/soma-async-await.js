async function somarNumeros(numero1, numero2) {
    var resultado = numero1 + numero2;
  
    if (resultado > 10) {
      return resultado;
    } else {
      throw new Error("A soma não é maior que 10");
    }
  }
  
  async function exemploAsyncAwait() {
    var numero1 = 5;
    var numero2 = 10;
  
    try {
      var resultado = await somarNumeros(numero1, numero2);
      console.log("A soma é maior que 10: " + resultado);
    } catch (erro) {
      console.log("Erro: " + erro.message);
    }
  }
  
  exemploAsyncAwait();
  