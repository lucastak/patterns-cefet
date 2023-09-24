import { iBD } from "./iBD";

export class cliente {
    constructor(private bd: iBD) {}

    getTotalVendas(): string {
        return this.bd.getTodasVendas();
    }
}