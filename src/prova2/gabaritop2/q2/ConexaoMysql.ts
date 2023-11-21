import { Conexao } from "./Conexao";

export class ConexaoMysql extends Conexao {
  public conectar(): void {
    console.log(
      `MySQL conectado com a string de conexão: ${this.stringConexao}`
    );
  }
}
