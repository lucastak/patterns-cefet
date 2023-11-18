import { IBancoDeDados } from "./IBancoDeDados";

export interface IFactory {
    criarBancoDeDados(): IBancoDeDados;
}