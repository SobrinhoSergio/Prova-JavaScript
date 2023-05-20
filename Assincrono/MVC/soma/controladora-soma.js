import { Calculadora } from "./calculadora.js";
import { VisaoSoma } from "./visao-soma.js";

export class ControladoraSoma {

    visao = null;

    constructor() {
        this.visao = new VisaoSoma();
    }

    iniciar() {
        this.visao.aoSomar( this.executar.bind( this ) );
    }

    executar() {
        const n1 = this.visao.numero1();
        const n2 = this.visao.numero2();
        const calculadora = new Calculadora();
        const resultado = calculadora.somar( n1, n2 );
        this.visao.exibirResultado( resultado );
    }

}

const controladora = new ControladoraSoma();
controladora.iniciar();
