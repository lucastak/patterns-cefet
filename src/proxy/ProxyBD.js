"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyBD = void 0;
var BD_1 = require("./BD");
var ProxyBD = /** @class */ (function () {
    function ProxyBD() {
        this.pedidosJsonFormat = null;
    }
    ProxyBD.prototype.getTodasVendas = function () {
        if (this.pedidosJsonFormat == null) {
            var bd = new BD_1.BD();
            this.pedidosJsonFormat = bd.getTodasVendas();
        }
        return this.pedidosJsonFormat;
    };
    return ProxyBD;
}());
exports.ProxyBD = ProxyBD;
