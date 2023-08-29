"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var TomadaDoisPinos_1 = require("./TomadaDoisPinos");
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.ligar("teste ligar");
    }
    Cliente.prototype.ligar = function (energia) {
        var tomada = new TomadaDoisPinos_1.TomadaDoisPinos();
        tomada.ligar(energia);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
