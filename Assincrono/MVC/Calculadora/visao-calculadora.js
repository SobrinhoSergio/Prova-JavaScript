export class VisaoCalculadora {

    // ENTRADAS

    numero1() {
        return Number( document.getElementById( 'n1' ).value );
    }

    numero2() {
        return Number( document.getElementById( 'n2' ).value );
    }

    operacao() {
        return document.getElementById( 'op' ).value;
    }

    // SAÍDAS

    exibirResultado( resultado ) {
        document.querySelector( 'output' ).innerText = resultado;
    }

    // EVENTOS DA VISÃO

    aoAcionarCalcular( funcao ) {
        document.getElementById( 'calcular' ).addEventListener( 'click', function ( event ) {
            event.preventDefault(); // Para cancelar o comportamento do form
            funcao();
        });
    }
}