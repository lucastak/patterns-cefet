import { Mediator } from "./Mediator";

export class Pedido {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    verificaQuantidade(qtd: number): void {
        console.log(`Verificando quantidade no Pedido: ${qtd}`);
        this.mediator.abaterEstoque(qtd);
    }

    abaterEstoque(qtd: number): void {
        console.log(`Abatendo estoque no Pedido: ${qtd}`);
    }

    verificaValorTotal(): number {
        console.log("Verificando valor total no Pedido");
        return 100; //valor teste
    }
}