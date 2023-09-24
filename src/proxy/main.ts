import { cliente } from "./cliente";
import { ProxyBD } from "./ProxyBD";

let proxy: ProxyBD = new ProxyBD();
let cli: cliente = new cliente(proxy);
console.log(cli.getTotalVendas());
console.log(cli.getTotalVendas());