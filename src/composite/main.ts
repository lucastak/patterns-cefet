import { Bola, Raquete, BandejaBasket } from "./produtos";
import { Pedido } from "./pedido";

let pedido: Pedido = new Pedido();
pedido.nome = 'Pedido Geral';

let cesta1: Pedido = new Pedido();
cesta1.nome = "Cesta1";

let cesta2: Pedido = new Pedido();
cesta2.nome = "Cesta2";

let cesta3: Pedido = new Pedido();
cesta3.nome = "Cesta3";

let b1: Bola = new Bola();
b1.valor = 31;
cesta1.addItem(b1);

let b2: Bola = new Bola();
b2.valor = 32;
cesta2.addItem(b2);

let b3: Bola = new Bola();
b3.valor = 33;
cesta3.addItem(b3);

let r1: Raquete = new Raquete();
r1.valor = 41;
cesta1.addItem(r1);

let r2: Raquete = new Raquete();
r2.valor = 42;
cesta2.addItem(r2);

let r3: Raquete = new Raquete();
r3.valor = 43;
cesta3.addItem(r2);

let bb1: BandejaBasket = new BandejaBasket();
bb1.valor = 51;
cesta1.addItem(bb1);

let bb2: BandejaBasket = new BandejaBasket();
bb2.valor = 52;
cesta2.addItem(bb2);

let bb3: BandejaBasket = new BandejaBasket();
bb3.valor = 53;
cesta3.addItem(bb3);


pedido.addItem(cesta1);
cesta1.addItem(cesta2);
pedido.addItem(cesta3);

console.log(pedido.imprimir());


