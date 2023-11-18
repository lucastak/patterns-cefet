import { Impressao } from "./I-Impressao";

export abstract class AbstracaoImpressora {
    protected implementacao: Impressao;
  
    constructor(implementacao: Impressao) {
      this.implementacao = implementacao;
    }
  
    abstract imprimir(documento: string): void;
}