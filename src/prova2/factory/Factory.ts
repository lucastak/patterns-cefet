import { BancoDeDados } from "./BancoDeDados";
import { IBancoDeDados } from "./IBancoDeDados";
import { IFactory } from "./IFactory";

export class Factory implements IFactory {
    criarBancoDeDados(): IBancoDeDados {
      return new BancoDeDados();
    }
  }