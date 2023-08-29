"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./produto");
let produto = produto_1.Produto.getInstance();
produto.idProduto = 1;
produto.nomeProduto = "novo produto 1";
let produto2 = produto_1.Produto.getInstance();
produto.nomeProduto = "mudou nome 1";
console.log(produto);
console.log(produto2);
produto2.nomeProduto = "mudou nome 2";
console.log(produto);
//# sourceMappingURL=main.js.map