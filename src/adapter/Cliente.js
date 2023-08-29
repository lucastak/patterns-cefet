"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var TomadaDoisPinos_1 = require("./TomadaDoisPinos");
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.tomada = new TomadaDoisPinos_1.TomadaDoisPinos();
        this.main();
    }
    Cliente.prototype.main = function () {
        this.tomada.ligar("ativar");
    };
    return Cliente;
}());
exports.Cliente = Cliente;
