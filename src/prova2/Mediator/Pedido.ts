export class Pedido {
    verificaQuantidade(qtd: number): void {
        console.log(`Verificando quantidade no Pedido: ${qtd}`);
    }

    abaterEstoque(qtd: number): void {
        console.log(`Abatendo estoque no Pedido: ${qtd}`);
    }

    verificaValorTotal(): number {
        console.log("Verificando valor total no Pedido");
        return 100; //valor teste
    }
}