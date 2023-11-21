import { FactoryConexao } from "./FactoryConexao";

let fabrica = new FactoryConexao();

let mysql = fabrica.getConexao("MySQL");
mysql.conectar();

let oracle = fabrica.getConexao("Oracle");
oracle.conectar();
