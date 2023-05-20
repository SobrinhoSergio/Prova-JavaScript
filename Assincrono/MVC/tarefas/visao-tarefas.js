
export class VisaoTarefas {

    exibirTarefas( tarefas ) {

        const fragmento = document.createDocumentFragment();
        for ( const t of tarefas ) {
            const tdId = document.createElement( 'td' );
            tdId.innerText = String( t.id );
            const tdDescricao = document.createElement( 'td' );
            tdDescricao.innerText = t.descricao;
            const tdConcluida = document.createElement( 'td' );
            tdConcluida.innerText = t.concluida ? 'Sim' : 'Não';

            const tr = document.createElement( 'tr' );
            tr.append( tdId, tdDescricao, tdConcluida );

            fragmento.append( tr );
        }
        const tbody = document.querySelector( 'tbody' );
        tbody.append( fragmento );
    }

    // exibirTarefas2( tarefas ) {
    //     document.querySelector( 'tbody' ).innerHTML =
    //         tarefas.map( t => `
    //             <tr>
    //                 <td>${t.id}</td>
    //                 <td>${t.descricao}</td>
    //                 <td>${t.concluida ? 'Sim' : 'Não'}</td>
    //             </tr>`
    //         ).join( '\n' );
    // }

    exibirMensagem( mensagem ) {
        document.getElementById( 'mensagem' ).innerText = mensagem;
    }

    atualizarConclusao( indice, concluida ) {
        const linha = document.querySelector( `tbody tr:nth-child(${indice + 1})` );
        console.log( 'Linha', linha, ' ultimo', linha.lastChild, concluida ? 'Sim' : 'Não' );
        if ( ! linha ) { // Linha não encontrada
            return;
        }
        // O último filho da linha é o <td> da coluna Concluída. Vamos mudar seu valor:
        linha.lastChild.innerText = concluida ? 'Sim' : 'Não';

    }

    aoClicarEmUmaLinha( funcaoQueRecebeOIndiceDaLinha ) {
        const linhas = document.querySelectorAll( 'tbody tr' );
        for ( const linha of linhas ) {
            linha.addEventListener( 'click', async ( event ) => {
                // Um clique em uma tabela sempre ocorre em um <td>.
                // Vamos pegar então o pai do <td>, que é a linha (<tr>).
                const linha = event.target.parentElement;
                // A linha possui a propriedade sectionRowIndex,
                // que lhe dá o índice da linha dentro do tbody, que é
                // exatamente o que precisamos. Vamos passá-la para o callback:
                funcaoQueRecebeOIndiceDaLinha( linha.sectionRowIndex );
            } );
        }
    }

}

