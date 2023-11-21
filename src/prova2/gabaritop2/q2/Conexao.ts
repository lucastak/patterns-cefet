export abstract class Conexao {
  public stringConexao: string;

  constructor(stringConexao: string) {
    this.stringConexao = stringConexao;
  }

  public abstract conectar(): void;
}
