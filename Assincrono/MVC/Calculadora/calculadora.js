const ADICAO = '+';
const SUBTRACAO = '-';
const MULTIPLICACAO = '*';
const DIVISAO = '/';

export class Calculadora { // Model

    calcular( numero1, numero2, operacao ) {
        switch ( operacao ) {
            case ADICAO         : return numero1 + numero2;
            case SUBTRACAO      : return numero1 - numero2;
            case MULTIPLICACAO  : return numero1 * numero2;
            case DIVISAO        : return numero1 / numero2;
            default             : throw new Error( 'Operação não suportada.' );
        }
    }
}