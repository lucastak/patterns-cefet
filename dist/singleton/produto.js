"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor() {
        this.idProduto = 0;
        this.nomeProduto = "";
    }
    ;
    static getInstance() {
        if (!Produto.instance) {
            Produto.instance = new Produto();
        }
        return Produto.instance;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map