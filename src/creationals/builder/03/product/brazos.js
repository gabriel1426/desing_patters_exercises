"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brazos = void 0;
var Brazos = /** @class */ (function () {
    function Brazos() {
        this.material = '';
        this.tamaño = '';
        this.color = '';
        this.dedos = 0;
    }
    Brazos.prototype.printBrazos = function () {
        console.log("Material: ".concat(this.material));
        console.log("Tama\u00F1o: ".concat(this.tamaño));
        console.log("Color: ".concat(this.color));
        console.log("Dedos: ".concat(this.dedos));
    };
    return Brazos;
}());
exports.Brazos = Brazos;
