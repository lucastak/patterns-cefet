"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empregado = /** @class */ (function () {
    function Empregado(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Empregado.prototype.calculaSalario = function () {
        if (this.salary >= 5000) {
            return this.salary * 0.75; // 25% de imposto
        }
        else {
            return this.salary * 0.85; // 15% de imposto
        }
    };
    return Empregado;
}());
exports.default = Empregado;
