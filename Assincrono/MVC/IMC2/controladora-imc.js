import { CalculadoraIMC } from "./calculadora-imc.js";
import { VisaoIMC } from "./visao-imc.js";

export class ControladoraIMC {

    calculadora;
    visao;

    constructor() {
        this.calculadora = new CalculadoraIMC();
        this.visao = new VisaoIMC();
    }

    iniciar() {
        this.visao.aoAcionarCalcular( this.calcularIMC );
    }

    calcularIMC = () => {
        const peso = this.visao.peso();
        const altura = this.visao.altura();
        const imc = this.calculadora.calcular( peso, altura );
        const classificacao = this.calculadora.classificar( imc );
        this.visao.exibirResultado( imc, classificacao );
    };

}