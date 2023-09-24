import { iValor } from "./iValor";

export class Bola implements iValor {
    valor: number = 0;

    valorTotal(): number {
        return this.valor;
    }

    imprimir(): string {
        return 'Bola: ' + this.valor;
    }
}

export class Raquete implements iValor {
    valor: number = 0;

    valorTotal(): number {
        return this.valor;
    }

    imprimir(): string {
        return 'Raquete: ' + this.valor;
    }
}

export class BandejaBasket implements iValor {
    valor: number = 0;

    valorTotal(): number {
        return this.valor;
    }

    imprimir(): string {
        return 'BandejaBasket: ' + this.valor;
    }
}