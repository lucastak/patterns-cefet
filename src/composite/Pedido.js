"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(idPedido) {
        this.lista = [];
        this.id = idPedido;
    }
    Pedido.prototype.add = function (item) {
        this.lista.push(item);
    };
    Pedido.prototype.remove = function (item) {
        var index = this.lista.indexOf(item);
        this.lista.slice(index, 1);
    };
    Pedido.prototype.precoTotal = function () {
        var valorTotal = 0;
        this.lista.forEach(function (item) {
            valorTotal += item.precoTotal();
        });
        return valorTotal;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
