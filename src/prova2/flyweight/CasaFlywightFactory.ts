import { CasaConcreta } from "./CasaConcreta";
import { ICasaFlyweight } from "./ICasaFlyweight";

export class CasaFlyweightFactory {
    private casas: { [key: string]: ICasaFlyweight } = {};
  
    obterCasa(tipo: string): ICasaFlyweight {
      if (!this.casas[tipo]) {
        this.casas[tipo] = new CasaConcreta(tipo);
      }
      return this.casas[tipo];
    }
  
    obterQuantidadeCasas(): number {
      return Object.keys(this.casas).length;
    }
}
  