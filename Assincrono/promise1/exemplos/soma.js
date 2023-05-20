function verificarSoma(numero1, numero2) {
    return new Promise((resolve, reject) => {
      const soma = numero1 + numero2;
      if (soma < 10) {
        reject("A soma é menor que 10");
      } else {
        resolve("A soma é maior ou igual a 10");
      }
    });
  }
  
  // Exemplo de uso da promessa
  verificarSoma(5, 6)
    .then(result => {
      console.log(result); // Será exibido "A soma é maior ou igual a 10"
    })
    .catch(error => {
      console.log("Erro aqui: ", error); // Não será executado neste exemplo
    });
  
  verificarSoma(2, 3)
    .then(result => {
      console.log(result); // Não será executado neste exemplo
    })
    .catch(error => {
      console.log("Erro aqui: ", error); // Será exibido "A soma é menor que 10"
    });
  