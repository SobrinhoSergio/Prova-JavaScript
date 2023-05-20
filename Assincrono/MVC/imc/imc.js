export class IMC {

    calcular( peso, altura ) {
        if ( altura <= 0 ) {
            throw new Error( 'A altura não deve ser zero ou inferior.' );
        }
        return peso / ( altura * altura );
        // return peso / Math.pow( altura, 2 );
        // return peso / altura ** 2;
    }

    classificar( imc ) {
        if ( imc < 17 ) {
            return 'Muito abaixo do peso';
        } else if ( imc <= 18.49 ) {
            return 'Abaixo do peso';
        } else if ( imc <= 24.99 ) {
            return 'Peso normal';
        } else if ( imc <= 29.99 ) {
            return 'Acima do peso';
        } else if ( imc <= 34.99 ) {
            return 'Obesidade I';
        } else if ( imc <= 39.99 ) {
            return 'Obesidade II (severa)';
        }
        return 'Obesidade III (mórbida)';
    }
}