"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var Controller = /** @class */ (function () {
    function Controller(alunoTXT) {
        this.alunoTXT = alunoTXT;
    }
    Controller.prototype.listarAlunos = function () {
        var alunos = this.alunoTXT.getAlunosFromTXT();
        console.log("Lista de Alunos:");
        alunos.forEach(function (aluno) {
            console.log(aluno);
        });
    };
    return Controller;
}());
exports.Controller = Controller;
