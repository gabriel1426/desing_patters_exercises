"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosFactory = void 0;
var elfos_archer_1 = require("./unit/elfos-archer");
var elfos_soldier_1 = require("./unit/elfos-soldier");
var elfos_wizard_1 = require("./unit/elfos-wizard");
var ElfosFactory = /** @class */ (function () {
    function ElfosFactory() {
        console.log("Unidad de Elfos");
    }
    ElfosFactory.prototype.createArcher = function () {
        return new elfos_archer_1.ElfosArcher();
    };
    ElfosFactory.prototype.createSoldier = function () {
        return new elfos_soldier_1.ElfosSoldier();
    };
    ElfosFactory.prototype.createWizard = function () {
        return new elfos_wizard_1.ElfosWizard();
    };
    return ElfosFactory;
}());
exports.ElfosFactory = ElfosFactory;
