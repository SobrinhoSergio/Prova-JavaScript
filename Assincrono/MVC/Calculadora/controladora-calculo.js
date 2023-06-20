import { Calculadora } from "./calculadora.js";
import { VisaoCalculadora } from "./visao-calculadora.js";

export class ControladoraCalculo {

    calculadora;
    visao;

    constructor() {
        this.calculadora = new Calculadora();
        this.visao = new VisaoCalculadora();
    }

    iniciar() {
        this.visao.aoAcionarCalcular( this.realizarCalculo.bind( this ) );
    }

    realizarCalculo() {
        const n1 = this.visao.numero1();
        const n2 = this.visao.numero2();
        const op = this.visao.operacao();
        try {
            const resultado = this.calculadora.calcular( n1, n2, op );
            this.visao.exibirResultado( resultado );
        } catch ( erro ) {
            this.visao.exibirResultado( erro.message );
        }
    }

}