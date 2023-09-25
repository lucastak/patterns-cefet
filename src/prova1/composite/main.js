"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DepartamentoComposite_1 = require("./DepartamentoComposite");
var Empregado_1 = require("./Empregado");
var Terceirizado_1 = require("./Terceirizado");
// Criar funcionários
var empregado1 = new Empregado_1.default("Funcionário 1", 6000);
var empregado2 = new Empregado_1.default("Funcionário 2", 4000);
// Criar terceirizados
var terceirizado1 = new Terceirizado_1.default("Terceirizado 1", 3000);
var terceirizado2 = new Terceirizado_1.default("Terceirizado 2", 8000);
// Criar departamento composto
var departmento = new DepartamentoComposite_1.default();
departmento.addSubDepartamento(empregado1);
departmento.addSubDepartamento(empregado2);
departmento.addSubDepartamento(terceirizado1);
departmento.addSubDepartamento(terceirizado2);
// Calcular salário líquido do departamento
var totalSalary = departmento.calculaSalario();
console.log("Sal\u00E1rio l\u00EDquido total do departamento: R$ ".concat(totalSalary.toFixed(2)));
