import { IBancoDeDados } from "./IBancoDeDados";

export class BD implements IBancoDeDados{
    getTodasVendas(): string {
        console.log("chamou getTodasVendas ProxyBd");
        const chamada = "chamada BD"
        return chamada;
    }
    
}