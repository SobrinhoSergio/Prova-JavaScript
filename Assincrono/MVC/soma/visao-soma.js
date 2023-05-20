export class VisaoSoma {

    // Entradas

    numero1() {
        return Number( document.getElementById( 'numero1' ).value );
    }

    numero2() {
        return Number( document.getElementById( 'numero2' ).value );
    }

    // Saídas

    exibirResultado( resultado ) {
        document.querySelector( 'output' ).innerText = resultado;
    }

    // Eventos

    aoSomar( funcao ) {
        document.getElementById( 'somar' ).addEventListener( 'click', ( event ) => {
            event.preventDefault();
            funcao();
        } );
    }

}