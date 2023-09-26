"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlunoAdapter_1 = require("./AlunoAdapter");
var Controller_1 = require("./Controller");
// Exemplo de uso
var alunoAdapter = new AlunoAdapter_1.default();
var controller = new Controller_1.Controller(alunoAdapter);
controller.listarAlunos();
