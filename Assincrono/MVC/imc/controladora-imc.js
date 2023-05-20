import { IMC } from "./imc.js";
import { VisaoIMC } from "./visao-imc.js";

export class ControladoraIMC {

    visao = null;

    constructor() {
        this.visao = new VisaoIMC();
    }

    iniciar() { // Faz amarração dos eventos
        this.visao.aoCalcular( this.executar.bind( this ) );
    }

    executar() {
        const imc = new IMC();
        try {
            const resultado = imc.calcular(
                this.visao.peso(),
                this.visao.altura()
            );
            const classificacao = imc.classificar( resultado );
            this.visao.exibirIMC( resultado, classificacao );
        } catch ( erro ) {
            this.visao.exibirMensagem( erro.message );
        }
    }

}

const controladora = new ControladoraIMC();
controladora.iniciar();
