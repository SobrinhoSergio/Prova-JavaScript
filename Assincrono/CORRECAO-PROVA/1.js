function exibirErro(err) {
    console.log(err.message);
}
  
const f1 = tempo => {
    return new Promise((resolve, reject) => {
      const f = () => reject(new Error('Rejeitado'));
      console.log(`Aguardando ${tempo} segundos...`);
      setTimeout(f, tempo);
    });
};
  
const f2 = x => {
    if ((Math.random() * 10) % 2 == 0) {
      return Promise.reject(new Error('Ops'));
    }
    return Promise.resolve(1000 * x);
};
  
const f3 = () => {
    return new Promise(resolve => {
      resolve(2)
        .then(r => {
          return f2(r);
        })
        .then(t => {
          return f1(t);
        })
        .catch(err => {
          throw err;
        });
    });
};
  
f3()
    .then(() => {
      console.log('Concluído');
    })
    .catch(err => {
      exibirErro(err);
    });
  