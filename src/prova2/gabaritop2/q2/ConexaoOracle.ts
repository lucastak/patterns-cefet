import { Conexao } from "./Conexao";

export class ConexaoOracle extends Conexao {
  public conectar(): void {
    console.log(
      `Oracle conectado com a string de conexão: ${this.stringConexao}`
    );
  }
}
