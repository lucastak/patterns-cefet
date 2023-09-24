import { adaptertomada } from "./adpaptertomada";
import { cliente } from "./cliente";


let adapter: adaptertomada = new adaptertomada();
let cli: cliente = new cliente(adapter);
cli.ligarTomada();

