"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BD = void 0;
var BD = /** @class */ (function () {
    function BD() {
    }
    BD.prototype.getTodasVendas = function () {
        console.log("chamou getTodasVendas ProxyBd");
        var chamada = "chamada BD";
        return chamada;
    };
    return BD;
}());
exports.BD = BD;
