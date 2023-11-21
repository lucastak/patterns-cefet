import { FlyweightFactory } from "./FlyweightFactory";

let factory = new FlyweightFactory();
let mySql = factory.fabricar("MySQL");
factory.fabricar("MySQL");

let oracle = factory.fabricar("Oracle");

let sql = factory.fabricar("SQLServer");
sql = factory.fabricar("SQLServer");
factory.fabricar("SQLServer");

factory.listarConexoes();

console.log();

mySql.testarConexao();
oracle.testarConexao();
sql.testarConexao();
