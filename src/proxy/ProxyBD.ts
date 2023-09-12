import { BD } from "./BD";
import { IBancoDeDados } from "./IBancoDeDados";

export class ProxyBD implements IBancoDeDados {
    private pedidosJsonFormat: string | null = null;
    
    getTodasVendas(): string {
        if (this.pedidosJsonFormat == null) {
            const bd = new BD()
            this.pedidosJsonFormat = bd.getTodasVendas();
        }     
        
        return this.pedidosJsonFormat;
    }

    
}