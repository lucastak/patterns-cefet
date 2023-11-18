import { Mediator } from "./Mediator";

export class Produto {
    private estoque: number = 100;
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    verificaQuantidade(qtd: number): void {
        console.log(`Verificando quantidade no Produto: ${qtd}`);
        if (this.estoque >= qtd) {
            this.mediator.verificarQuantidade(qtd)
        } else {
            console.log("Quantidade insuficiente no estoque.");
        }
    }

    abaterEstoque(qtd: number): void {
        console.log(`Abatendo estoque no Produto: ${qtd}`);
        this.estoque -= qtd;
    }
}