import { ServicoTarefas } from "./servico-tarefas.js";
import { VisaoTarefas } from "./visao-tarefas.js";

export class ControladoraTarefas {

    visao = null;
    servico = null;

    constructor() {
        this.visao = new VisaoTarefas();
        this.servico = new ServicoTarefas();
    }

    async iniciar() {
        try {
            // Exibe as tarefas
            const tarefas = await this.servico.obterTarefas();
            this.visao.exibirTarefas( tarefas );

            // Registra o evento para alterar a linha
            this.visao.aoClicarEmUmaLinha( this.alterarConclusaoDeTarefaNaLinha.bind( this ) );

        } catch ( erro ) {
            this.visao.exibirMensagem( erro.message );
        }
    }

    async alterarConclusaoDeTarefaNaLinha( indice ) {
        try {
            // Ajusta a tarefa
            const tarefa = await this.servico.alterarConclusao( indice );
            // Atualiza na interface
            this.visao.atualizarConclusao( indice, tarefa.concluida );
        } catch ( erro ) {
            this.visao.exibirMensagem( erro.message );
        }
    }

}

const controladora = new ControladoraTarefas();
await controladora.iniciar();
