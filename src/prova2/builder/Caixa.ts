import { Computador } from "./Computador";
import { ComputadorBuild } from "./ComputadorBuild";

export class Caixa {
    private CB: ComputadorBuild;

    constructor() {
        this.CB = new ComputadorBuild();
    }

    buildBasico(): Computador {
        return this.CB
            .addComponente("8GB", "I3", "Tela 13\"")
            .build();
    }

    buildMedio(): Computador{
        return this.CB
            .addComponente("16GB", "I5", "Tela 15\"")
            .build();
    }

    buildAvancado(): Computador{
        return this.CB
            .addComponente("32GB", "I7", "Tela 17\"")
            .build();
    }
}