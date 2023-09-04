import { IValor } from "./IValor";

export class Produto implements IValor{
    id: number;
    private nome: string;
    private qtd: number;
    private precoUnitario: number;

    constructor(idProduto: number, nome: string, qtd: number, precoUnitario: number) {
        this.id = idProduto;
        this.nome = nome;
        this.qtd = qtd;
        this.precoUnitario = precoUnitario;
    }

    precoTotal(): number {
        return (this.qtd * this.precoUnitario);
    }
}