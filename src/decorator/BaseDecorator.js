"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDecorator = void 0;
var BaseDecorator = /** @class */ (function () {
    function BaseDecorator() {
        this.preco = 15;
    }
    BaseDecorator.prototype.precoFinal = function () {
        return this.preco;
    };
    return BaseDecorator;
}());
exports.BaseDecorator = BaseDecorator;
