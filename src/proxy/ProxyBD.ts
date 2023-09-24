import { BD } from "./BD";
import { iBD } from "./iBD";

export class ProxyBD implements iBD {
    private todasVendas: string = '';

    getTodasVendas(): string {
        if (this.todasVendas == '') {
            console.log('chamou proxy');
            let bd: BD = new BD();
            this.todasVendas = bd.getTodasVendas();
        }

        return this.todasVendas;
    }
}