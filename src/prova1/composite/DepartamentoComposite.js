"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DepartamentoComposite = /** @class */ (function () {
    function DepartamentoComposite() {
        this.subDepartamentos = [];
    }
    DepartamentoComposite.prototype.addSubDepartamento = function (subDepartamento) {
        this.subDepartamentos.push(subDepartamento);
    };
    DepartamentoComposite.prototype.calculaSalario = function () {
        var totalSalary = 0;
        for (var _i = 0, _a = this.subDepartamentos; _i < _a.length; _i++) {
            var subDepartamento = _a[_i];
            totalSalary += subDepartamento.calculaSalario();
        }
        return totalSalary;
    };
    return DepartamentoComposite;
}());
exports.default = DepartamentoComposite;
