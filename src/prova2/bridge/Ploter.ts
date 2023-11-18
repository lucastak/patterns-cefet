import { Impressao } from "./I-Impressao";

export class Ploter implements Impressao {
    imprimir(documento: string): void {
      console.log(`Imprimindo documento via plotter: ${documento}`);
    }
}