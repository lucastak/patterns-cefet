import { Item } from "./Item";

export class Personagem {
  public inventario: Item[] = [];

  public listarItens(): Item[] {
    return this.inventario;
  }
}
