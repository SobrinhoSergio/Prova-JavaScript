import { Visao } from "/view/visao.js";
import { Servico } from "/service/servico.js";

export class Controladora {
    servico;
    visao;

    constructor() {
        this.servico = new Servico();
        this.visao = new Visao();
    }

    async iniciar() {
        try {
            const idDoGame = this.visao.pegarId();
            const gameComId = await this.servico.comId(idDoGame);
            this.visao.exibirGameNoFormulario(gameComId);
            
            this.visao.aoAlterar(this.alterarGame);
            this.visao.aoDeletar(this.deletarGame);
        } catch (erro) {
            this.visao.exibirMensagem(erro.message);
            this.visao.redirecionar('/welcome', 5000);
        }
    }
    
    async gameComId(id) {
        try {
            const game = await this.servico.comId(id);
            this.visao.exibirGameNoFormulario(game);
        } catch (error) {
            this.visao.exibirMensagem(`Não foi possível acessar o game: ${error.message}`);
        }
    }
    
    alterarGame = async () => {
        try {
            const game = this.visao.consultarForm();
            await this.servico.alterar(game);
            this.visao.exibirAlert('Alterado com sucesso!');
            
        } catch(erro) {
            this.visao.exibirAlert(erro);
        }
    }
    
    deletarGame = async () => {
        try {
            const idDoGame = this.visao.pegarId();
            await this.servico.remover(idDoGame);
            this.visao.exibirMensagem('Deletado com sucesso');
            this.visao.redirecionar('/welcome', 5000);
        } catch(erro) {
            this.visao.exibirMensagem(erro);
        }
    }
}