"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piernas = void 0;
var Piernas = /** @class */ (function () {
    function Piernas() {
        this.material = '';
        this.tamaño = '';
        this.color = '';
        this.dedos = 0;
    }
    Piernas.prototype.printPiernas = function () {
        console.log("Material: ".concat(this.material));
        console.log("Tama\u00F1o: ".concat(this.tamaño));
        console.log("Color: ".concat(this.color));
        console.log("Dedos: ".concat(this.dedos));
    };
    return Piernas;
}());
exports.Piernas = Piernas;
