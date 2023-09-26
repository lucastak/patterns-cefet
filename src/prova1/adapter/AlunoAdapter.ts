import AlunoBd from "./AlunoBd";
import IAlunoTxt from "./IAlunoTxt";

class AlunoBDAdapter implements IAlunoTxt {
  private alunoBD: AlunoBd;

  constructor() {
    this.alunoBD = new AlunoBd();
  }

  getAlunosFromTXT(): string[] {
    return this.alunoBD.getAlunosFromDB();
  }
}
export default AlunoBDAdapter;