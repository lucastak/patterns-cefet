import { Impressao } from "./I-Impressao";

export class ImpressoraPB implements Impressao {
    imprimir(documento: string): void {
        console.log(`Imprimindo documento em preto e branco: ${documento}`);
    }
}