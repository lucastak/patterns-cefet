import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class Mediator {
    private pedido: Pedido;
    private produto: Produto;

    constructor() {
        this.pedido = new Pedido(this);
        this.produto = new Produto(this);
    }

    verificarQuantidade(qtd: number): void {
        this.produto.verificaQuantidade(qtd);
    }

    abaterEstoque(qtd: number): void {
        this.produto.abaterEstoque(qtd);
    }

    verificaValorTotal(): number {
        return this.pedido.verificaValorTotal();
    }
}