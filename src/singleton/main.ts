import { Produto } from "./produto";

let produto: Produto = Produto.getInstance();
produto.idProduto = 1;
produto.nomeProduto = "novo produto 1"

let produto2: Produto = Produto.getInstance();
produto.nomeProduto = "mudou nome 1"

console.log(produto);
console.log(produto2);

produto2.nomeProduto = "mudou nome 2";
console.log(produto);