// Função para enviar o cadastro para o servidor
async function cadastrarSelecao(selecao) {
    try {
      const response = await fetch('http://localhost:3000/selecoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selecao)
      });
  
      if (response.status >= 400) {
        throw new Error('Erro ao cadastrar seleção: ' + response.status);
      }
  
      return response.json();
    } catch (err) {
      throw new Error('Erro ao cadastrar seleção: ' + err.message);
    }
}
  
// Função para lidar com o evento de clique no botão "Salvar"
function handleSalvarClick() {

    const paisInput = document.getElementById('pais');
    const pais = paisInput.value;

    if (pais) {
        const selecao = { nome: pais };

        cadastrarSelecao(selecao)
        .then(() => {
            // Limpar o valor do input após o cadastro
            paisInput.value = '';

            // Atualizar a lista de seleções exibida no HTML
            atualizarListaSelecoes();
        })
        .catch(err => {
            console.error(err);
            // Tratar o erro de cadastro aqui (exibindo uma mensagem de erro, por exemplo)
        });
    }
}
  
// Função para atualizar a lista de seleções exibida no HTML
async function atualizarListaSelecoes() {
    const listagem = document.querySelector('div');

    try {
        const times = await selecoes3();
        listagem.innerHTML = `
        <ul>
            ${times.map(t => `<li>${t}</li>`).join('\n')}
        </ul>`;
    } catch (err) {
        console.error(err);
        listagem.innerHTML = 'Erro ao consultar as seleções: ' + err.message;
    }
}
  
// Adicionar o evento de clique no botão "Salvar"
const salvarButton = document.getElementById('salvar');
salvarButton.addEventListener('click', handleSalvarClick);

// Chamar a função para atualizar a lista de seleções ao carregar a página
window.addEventListener('DOMContentLoaded', atualizarListaSelecoes);
  