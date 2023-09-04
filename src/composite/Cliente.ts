import { IValor } from "./IValor";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

const pedido1: Pedido = new Pedido(1);

pedido1.add(new Produto(1, "produto1", 1, 100));
pedido1.add(new Produto(2, "produto2", 1, 200));
pedido1.add(new Produto(3, "produto3", 1, 300));

const pedido2: Pedido = new Pedido(2);
pedido2.add(new Produto(5, "produto5", 2, 100));
pedido2.add(new Produto(4, "produto4", 1, 200));
pedido2.add(new Produto(6, "produto6", 1, 300));

const pedido3: Pedido = new Pedido(3);
pedido3.add(new Produto(7, "produto7", 1, 100));
pedido3.add(new Produto(8, "produto8", 1, 200));

pedido2.add(pedido3);
pedido1.add(pedido2);

console.log("total", pedido1.precoTotal());
