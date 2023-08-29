"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto() {
        this.idProduto = 0;
        this.nomeProduto = "";
    }
    ;
    Produto.getInstance = function () {
        if (!Produto.instance) {
            Produto.instance = new Produto();
        }
        return Produto.instance;
    };
    return Produto;
}());
exports.Produto = Produto;
