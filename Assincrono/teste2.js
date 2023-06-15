function esperar3Segundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(100);
      }, 3000);
    });
  }
  
  async function retornarNumero() {
    const numero = await esperar3Segundos();
    console.log(numero);
  }
  
  retornarNumero();
  