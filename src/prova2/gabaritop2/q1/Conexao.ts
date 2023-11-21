export class Conexao {
  public tipoConexao: string;

  constructor(conexao: string) {
    this.tipoConexao = conexao;
  }

  testarConexao() {
    console.log(`Conexão ${this.tipoConexao} está funcionando!`);
  }
}
