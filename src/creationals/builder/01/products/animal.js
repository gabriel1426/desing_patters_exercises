"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getData = function () {
        console.log("".concat(this.name, " -  ").concat(this.age, " - ").concat(this.country));
    };
    return Animal;
}());
exports.Animal = Animal;
