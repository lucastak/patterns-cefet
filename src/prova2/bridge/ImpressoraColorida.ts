import { Impressao } from "./I-Impressao";

export class ImpressoraColorida implements Impressao {
    imprimir(documento: string): void {
        console.log(`Imprimindo documento colorido: ${documento}`);
    }
}