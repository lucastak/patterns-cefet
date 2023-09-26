"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlunoBd_1 = require("./AlunoBd");
var AlunoBDAdapter = /** @class */ (function () {
    function AlunoBDAdapter() {
        this.alunoBD = new AlunoBd_1.default();
    }
    AlunoBDAdapter.prototype.getAlunosFromTXT = function () {
        return this.alunoBD.getAlunosFromDB();
    };
    return AlunoBDAdapter;
}());
exports.default = AlunoBDAdapter;
