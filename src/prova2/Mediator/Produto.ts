export class Produto {
    private estoque: number = 100;

    verificaQuantidade(qtd: number): void | number {
        console.log(`Verificando quantidade no Produto: ${qtd}`);
        if (this.estoque >= qtd) {
            return this.estoque;
        } else {
            console.log("Quantidade insuficiente no estoque.");
        }
    }

    abaterEstoque(qtd: number): void {
        console.log(`Abatendo estoque no Produto: ${qtd}`);
        this.estoque -= qtd;
    }
}