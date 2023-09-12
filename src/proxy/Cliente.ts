import { IBancoDeDados } from "./IBancoDeDados";

export class Cliente {
    constructor(private bd: IBancoDeDados) {}

    getVendas() {
        return this.bd.getTodasVendas();
    }
}