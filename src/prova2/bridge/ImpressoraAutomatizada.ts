import { AbstracaoImpressora } from "./AbstracaoImpressora";
import { Impressao } from "./I-Impressao";

export class ImpressaoAutomatizada extends AbstracaoImpressora {
    constructor(implementacao: Impressao) {
      super(implementacao);
    }
  
    imprimir(documento: string): void {
      console.log("Iniciando impressão automatizada");
      this.implementacao.imprimir(documento);
    }
  }