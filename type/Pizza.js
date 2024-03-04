"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    Pizza.prototype.infoDosPedidos = function () {
        console.log("Pre\u00E7o(R$): ".concat(this.preco.toFixed(2), " \nTamanho(CM): ").concat(this.tamanho, " \nSabor: ").concat(this.sabor));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
