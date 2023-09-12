"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(bd) {
        this.bd = bd;
    }
    Cliente.prototype.getVendas = function () {
        return this.bd.getTodasVendas();
    };
    return Cliente;
}());
exports.Cliente = Cliente;
