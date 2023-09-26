import IAlunoTxt from "./IAlunoTxt";

class Controller {
  private alunoTXT: IAlunoTxt;

  constructor(alunoTXT: IAlunoTxt) {
    this.alunoTXT = alunoTXT;
  }

  listarAlunos(): void {
    const alunos = this.alunoTXT.getAlunosFromTXT();
    console.log("Lista de Alunos:");
    alunos.forEach((aluno) => {
      console.log(aluno);
    });
  }
}

export { Controller };
