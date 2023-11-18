import { AbstracaoImpressora } from "./AbstracaoImpressora";
import { Impressao } from "./I-Impressao";

export class ImpressaoUsuario extends AbstracaoImpressora {
    private cabecalho: string;
  
    constructor(implementacao: Impressao, cabecalho: string) {
      super(implementacao);
      this.cabecalho = cabecalho;
    }
  
    imprimir(documento: string): void {
      console.log(`Iniciando impressão via usuário com cabeçalho: ${this.cabecalho}`);
      this.implementacao.imprimir(documento);
    }
  }