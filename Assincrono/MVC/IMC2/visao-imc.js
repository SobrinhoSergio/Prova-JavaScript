export class VisaoIMC {

    peso() {
        return Number( document.getElementById( 'peso' ).value );
    }

    altura() {
        return Number( document.getElementById( 'altura' ).value );
    }

    exibirResultado( imc, classificacao ) {
        document.querySelector( 'output' ).innerText = imc + ' ' + classificacao;
    }

    aoAcionarCalcular( funcao ) {
        document.getElementById( 'calcular' ).addEventListener( 'click', ev => {
                ev.preventDefault();
                funcao();
            } );
    }

}