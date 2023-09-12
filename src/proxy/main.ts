import { Cliente } from "./Cliente";
import { ProxyBD } from "./ProxyBD";
const proxy = new ProxyBD();

let client = new Cliente(proxy);
client.getVendas()
client.getVendas()

