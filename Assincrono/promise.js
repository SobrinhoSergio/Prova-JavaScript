function brindes() {
    return new Promise((resolve, reject) => {
      if (Math.random() <= 0.5) {
        resolve(['chocolate', 'orange']);
      } else {
        reject(new Error('Sem brindes hoje'));
      }
    });
  }
  
  brindes()
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.log('Erro:', erro.message);
    });
  