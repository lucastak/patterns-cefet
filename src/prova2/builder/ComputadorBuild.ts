import { Computador } from "./Computador";

export class ComputadorBuild {
    private computador: Computador = new Computador();

    constructor() {
        this.reset();
    }

    reset() {
        this.computador = new Computador();
    }

    addComponente(memoria: string, processador: string, tela: string): ComputadorBuild {
        this.computador.addComponente(memoria, processador, tela);
        return this;
    }

    build(): Computador {
        let comp = this.computador;
        this.reset();
        return comp;
    }
}