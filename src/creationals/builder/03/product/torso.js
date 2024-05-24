"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Torso = void 0;
var Torso = /** @class */ (function () {
    function Torso() {
        this.material = '';
        this.tamaño = '';
        this.color = '';
        this.forma = '';
    }
    Torso.prototype.printTorso = function () {
        console.log("Material: ".concat(this.material));
        console.log("Tama\u00F1o: ".concat(this.tamaño));
        console.log("Color: ".concat(this.color));
        console.log("Forma: ".concat(this.forma));
    };
    return Torso;
}());
exports.Torso = Torso;
