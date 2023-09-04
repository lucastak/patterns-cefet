"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(idProduto, nome, qtd, precoUnitario) {
        this.id = idProduto;
        this.nome = nome;
        this.qtd = qtd;
        this.precoUnitario = precoUnitario;
    }
    Produto.prototype.precoTotal = function () {
        return (this.qtd * this.precoUnitario);
    };
    return Produto;
}());
exports.Produto = Produto;
