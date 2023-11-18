import { Factory } from "./Factory";
import { IBancoDeDados } from "./IBancoDeDados";
import { IFactory } from "./IFactory";


const fabrica: IFactory = new Factory();
const bancoDeDados: IBancoDeDados = fabrica.criarBancoDeDados();

bancoDeDados.conectar();
bancoDeDados.consultar('SELECT * FROM tabela');