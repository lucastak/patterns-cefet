import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class Mediator {
    private pedido: Pedido;
    private produto: Produto;

    constructor() {
        this.pedido = new Pedido();
        this.produto = new Produto();
    }

    verificarQuantidade(qtd: number): void | number {
        return this.produto.verificaQuantidade(qtd);
    }

    abaterEstoque(qtd: number): void {
        return this.produto.abaterEstoque(qtd);
    }

    verificaValorTotal(): number {
        return this.pedido.verificaValorTotal();
    }
}