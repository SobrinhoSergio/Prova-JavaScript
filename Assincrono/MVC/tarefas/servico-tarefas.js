export class ServicoError extends Error {
    constructor( mensagem ) {
        super( mensagem );
        this.name = 'ServicoError';
    }
}

const API = 'http://localhost:3000';

export class ServicoTarefas {

    tarefas = [];

    async obterTarefas() {
        try {
            const resposta = await fetch( `${API}/tarefas` );
            if ( resposta.status >= 400 ) { // Mesmo que if ( ! resposta.ok )
                throw new Error();
            }
            // Guardando as tarefas para usar depois na alteração:
            this.tarefas = await resposta.json();
            return this.tarefas;
        } catch ( error ) {
            throw new ServicoError(
                'Erro ao consultar as tarefas' + ( resposta ? ': ' + resposta.status : '.' ) );
        }
    }

    async alterarConclusao( indice ) {

        // Valida o índice
        if ( indice < 0 || indice >= this.tarefas.length ) {
            throw new ServicoError( 'Posição inexistente.' );
        }

        // Ajusta a tarefa
        let tarefa = this.tarefas[ indice ];
        tarefa.concluida = ! tarefa.concluida; // Inverte o valor booleano

        // Salva a alteração
        try {
            const opcoes = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( tarefa ) // Converte em String (importante!)
            };
            const resposta = await fetch( `${API}/tarefas/${tarefa.id}`, opcoes );
            if ( resposta.status >= 400 ) { // Mesmo que if ( ! resposta.ok )
                throw new Error();
            }
            return tarefa;
        } catch ( error ) {
            throw new ServicoError(
                'Erro ao alterar a tarefa indicada' + ( resposta ? ': ' + resposta.status : '.' ) );
        }

    }

}
