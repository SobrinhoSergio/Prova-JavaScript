export class VisaoIMC {

    peso() {
        return Number( document.getElementById( 'peso' ).value );
    }

    altura() {
        return Number( document.getElementById( 'altura' ).value );
    }

    exibirIMC( valor, classificacao ) {
        document.getElementById( 'imc' ).innerText = valor.toFixed( 2 );
        document.getElementById( 'classificacao' ).innerText = classificacao;
    }

    exibirMensagem( mensagem ) {
        document.getElementById( 'mensagem' ).innerText = mensagem;
    }

    aoCalcular( funcao ) {
        document.getElementById( 'calcular' ).addEventListener( 'click', event => {
            event.preventDefault();
            funcao();
        } );
    }

}