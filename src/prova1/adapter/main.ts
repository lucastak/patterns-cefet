import AlunoBDAdapter from "./AlunoAdapter";
import { Controller } from "./Controller";

// Exemplo de uso
const alunoAdapter = new AlunoBDAdapter();
const controller = new Controller(alunoAdapter);
controller.listarAlunos();