"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cabeza = void 0;
var Cabeza = /** @class */ (function () {
    function Cabeza() {
        this.forma = '';
        this.material = '';
        this.tamaño = '';
        this.color = '';
        this.ojos = 0;
        this.boca = 0;
        this.nariz = 0;
    }
    Cabeza.prototype.printCabeza = function () {
        console.log("Formato: ".concat(this.forma));
        console.log("Material: ".concat(this.material));
        console.log("Tama\u00F1o: ".concat(this.tamaño));
        console.log("Color: ".concat(this.color));
        console.log("Ojos: ".concat(this.ojos));
        console.log("Boca: ".concat(this.boca));
        console.log("Nariz: ".concat(this.nariz));
    };
    return Cabeza;
}());
exports.Cabeza = Cabeza;
