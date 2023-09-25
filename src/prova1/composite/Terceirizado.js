"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Terceirizado = /** @class */ (function () {
    function Terceirizado(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Terceirizado.prototype.calculaSalario = function () {
        return this.salary * 0.89; // 11% de imposto
    };
    return Terceirizado;
}());
exports.default = Terceirizado;
