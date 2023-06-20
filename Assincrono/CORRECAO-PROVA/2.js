function exibirErro(err) {
    console.log(err.message);
}
  
const fetchText = async url => {
    const response = await fetch(url);
    if (response.status >= 400) {
      throw new Error(`Erro ao carregar ${url}`);
    }
    return response.text();
};
  
const carregarArquivos = async () => {
    try {
      const texto1 = await fetchText('q1.js');
      const texto2 = await fetchText('q2.js');
      const juncao = texto1 + '\n\n' + texto2;
      console.log('JUNÇÃO: \n', juncao);
    } catch (err) {
      exibirErro(err);
    }
};
  
carregarArquivos();
  