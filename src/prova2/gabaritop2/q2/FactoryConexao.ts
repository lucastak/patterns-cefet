import { Conexao } from "./Conexao";
import { ConexaoMysql } from "./ConexaoMysql";
import { ConexaoOracle } from "./ConexaoOracle";

export class FactoryConexao {
  getConexao(stringConexao: string) {
    if (stringConexao == "MySQL") {
      return new ConexaoMysql(stringConexao);
    } else if (stringConexao == "Oracle") {
      return new ConexaoOracle(stringConexao);
    } else {
      throw console.error("String de conexáo inválida");
    }
  }
}
