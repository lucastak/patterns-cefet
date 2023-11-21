import { Conexao } from "./Conexao";

export class FlyweightFactory {
  public conexoes: Conexao[] = [];

  constructor() {}

  fabricar(tipoConexao: string): Conexao {
    let conexao = this.existeConexao(tipoConexao);
    if (!conexao) {
      let novaConexao: Conexao = new Conexao(tipoConexao);
      this.conexoes = [...this.conexoes, novaConexao];
      return novaConexao;
    }
    return conexao;
  }

  existeConexao(tipoConexao: string) {
    return this.conexoes.find((e) => e.tipoConexao == tipoConexao);
  }

  listarConexoes() {
    for (const element of this.conexoes) {
      console.log(element.tipoConexao);
    }
  }
}
