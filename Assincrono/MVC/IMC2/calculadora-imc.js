const LIMITE_MUITO_ABAIXO_DO_PESO = 17;
const LIMITE_ABAIXO_DO_PESO = 18.49;

export class CalculadoraIMC {

    calcular( peso, altura ) {
        return peso / Math.pow( altura, 2 );
        // return peso / altura ** 2;
    }

    classificar( imc ) {
        if ( imc < LIMITE_MUITO_ABAIXO_DO_PESO ) {
            return 'Muito abaixo do peso';
        } else if ( imc < LIMITE_ABAIXO_DO_PESO ) {
            return 'Abaixo do peso';
        }
        return 'TO-DO';
    }
}