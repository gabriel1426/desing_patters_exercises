"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.printRobot = function () {
        if (this.cabeza) {
            console.log('Cabeza:');
            console.log("Material: ".concat(this.cabeza.material));
            console.log("Tama\u00F1o: ".concat(this.cabeza.tamaño));
            console.log("Color: ".concat(this.cabeza.color));
            console.log("Forma: ".concat(this.cabeza.forma));
        }
        if (this.brazos) {
            console.log('Brazos:');
            console.log("Material: ".concat(this.brazos.material));
            console.log("Tama\u00F1o: ".concat(this.brazos.tamaño));
            console.log("Color: ".concat(this.brazos.color));
            console.log("Dedos: ".concat(this.brazos.dedos));
        }
        if (this.piernas) {
            console.log('Piernas:');
            console.log("Material: ".concat(this.piernas.material));
            console.log("Tama\u00F1o: ".concat(this.piernas.tamaño));
            console.log("Color: ".concat(this.piernas.color));
            console.log("Dedos: ".concat(this.piernas.dedos));
        }
        if (this.torso) {
            console.log('Torso:');
            console.log("Material: ".concat(this.torso.material));
            console.log("Tama\u00F1o: ".concat(this.torso.tamaño));
            console.log("Color: ".concat(this.torso.color));
            console.log("Forma: ".concat(this.torso.forma));
        }
    };
    return Robot;
}());
exports.Robot = Robot;
