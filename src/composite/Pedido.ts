import { IValor } from "./IValor";

export class Pedido implements IValor {
    id: number;
    private lista: IValor[] = [];
    
    constructor(idPedido: number) {
        this.id = idPedido;
    }

    public add(item: IValor): void{
        this.lista.push(item);
    }

    public remove(item: IValor): void{
        let index = this.lista.indexOf(item);
        this.lista.slice(index, 1);
    }

    public precoTotal(): number {
        let valorTotal = 0;

        this.lista.forEach(item => {
            valorTotal += item.precoTotal();
        })

        return valorTotal;
    }

}