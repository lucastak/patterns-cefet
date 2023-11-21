import { Personagem } from "./Personagem";
import { Roupa } from "./Roupa";
import { Arma } from "./Arma";
import { Armadura } from "./Armadura";
import { Escudo } from "./Escudo";

export class PersonagemBuild {
  private personagem: Personagem;

  constructor() {
    this.personagem = new Personagem();
    this.reset();
  }

  getPersonagem() {
    return this.personagem;
  }

  reset(): void {
    this.personagem = new Personagem();
    this.addRoupa("Roupa Básica");
  }

  addRoupa(roupa: string): this {
    let novoItem = new Roupa(roupa);
    this.personagem.inventario = [...this.personagem.inventario, novoItem];

    return this;
  }

  addArma(arma: string): this {
    let novoItem = new Arma(arma);
    this.personagem.inventario = [...this.personagem.inventario, novoItem];

    return this;
  }

  addArmadura(armadura: string): this {
    let novoItem = new Armadura(armadura);
    this.personagem.inventario = [...this.personagem.inventario, novoItem];

    return this;
  }

  addEscudo(escudo: string): this {
    let novoItem = new Escudo(escudo);
    this.personagem.inventario = [...this.personagem.inventario, novoItem];

    return this;
  }
}
