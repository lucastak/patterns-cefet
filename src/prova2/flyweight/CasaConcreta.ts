import { ICasaFlyweight } from "./ICasaFlyweight";

export class CasaConcreta implements ICasaFlyweight {
    private tipo: string;
  
    constructor(tipo: string) {
      this.tipo = tipo;
    }
  
    exibir(): void {
      console.log(`Esta é uma casa do tipo ${this.tipo}`);
    }
  }