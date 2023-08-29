"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterTomada = void 0;
var AdapterTomada = /** @class */ (function () {
    function AdapterTomada() {
    }
    AdapterTomada.prototype.ligar = function (energia) {
        console.log("energia adapter", energia);
    };
    return AdapterTomada;
}());
exports.AdapterTomada = AdapterTomada;
