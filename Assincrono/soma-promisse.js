const promessaDeSomaMaiorQue10 = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    const resultado = numero1 + numero2;
    
    if (resultado > 10) {
      resolve(resultado);
    } else {
      const erro = new Error("A soma não é maior que 10");
      reject(erro);
    }
  });
}

// Exemplo de uso da promessa
const numero1 = 5;
const numero2 = 2;

promessaDeSomaMaiorQue10(numero1, numero2)
  .then((resultado) => {
    console.log("A soma é maior que 10: " + resultado);
  })
  .catch((erro) => {
    console.log("Erro: " + erro.message);
  });
