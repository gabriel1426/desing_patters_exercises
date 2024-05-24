"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICharacterInterface = void 0;
var ICharacterInterface = /** @class */ (function () {
    function ICharacterInterface() {
    }
    ICharacterInterface.prototype.getData = function () {
        console.log("Yo sou un ".concat(this.name, " a nivel ").concat(this.level));
    };
    ;
    return ICharacterInterface;
}());
exports.ICharacterInterface = ICharacterInterface;
