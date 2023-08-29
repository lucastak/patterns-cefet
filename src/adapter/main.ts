import { AdapterTomada } from "./AdapterTomada";
import { Cliente } from "./Cliente";
const adapter = new AdapterTomada();

new Cliente(adapter);