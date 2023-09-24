import { iValor } from './iValor'

export class Pedido implements iValor {
    private listItem: iValor[] = [];
    nome: string = '';
    
    valorTotal(): number {
        let vValor = 0;
        this.listItem.forEach(item => {
            vValor += item.valorTotal();
        });
        return vValor;
    }

    addItem(item: iValor): void {
        this.listItem.push(item);
    }

    imprimir(): string {
        let vImprimir: string = this.nome + ': ' + this.valorTotal() + '\n';
        this.listItem.forEach(item => {
            vImprimir += item.imprimir() + '\n';
        });
        return vImprimir;
    }
}