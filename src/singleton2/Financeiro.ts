import { IFuncionario } from "./IFuncionario";

export class Financeiro implements IFuncionario{
    nome: string;
    salario: number;

    constructor(funcionarioNome: string, funcionarioSalario: number) {
        this.nome = funcionarioNome;
        this.salario = funcionarioSalario;
    }
}