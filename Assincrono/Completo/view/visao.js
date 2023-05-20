export class Visao {
    exibirMensagem(mensagem) {
        document.getElementById('mensagem').innerText = mensagem;
    }

    exibirAlert(mensagem) {
        alert(mensagem);
    }

    redirecionar(url, tempoEmMs) {
        setTimeout(() => {
            location.href = url;
        }, tempoEmMs);
    }

    exibirGameNoFormulario(game) {
        const inputNome = document.getElementById('nome');
        const inputAno = document.getElementById('ano');
        const inputFabricante = document.getElementById('fabricante');

        inputNome.value = game.nome;
        inputAno.value = game.ano;
        inputFabricante.value = game.fabricante;
    }

    pegarId() {
        const id = location.pathname.split('/')[2];

        if (id) {
            return id;
        } else {
            throw new Error('Parâmetro inválido!');
        }
    }

    consultarForm() {
        return {
            id: this.pegarId(),
            nome: document.querySelector("#nome").value,
            ano: document.querySelector("#ano").value,
            fabricante: document.querySelector("#fabricante").value
        }
    }

    aoAlterar(clb) {
        document.getElementById('alterar').addEventListener('click', async (e) => {
            e.preventDefault();
            clb();
        });
    }

    aoDeletar(clb) {
        document.getElementById('deletar').addEventListener('click', async (e) => {
            e.preventDefault();
            clb();
        });
    }
}