"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosFactory = void 0;
var orcos_archer_1 = require("./unit/orcos-archer");
var orcos_soldier_1 = require("./unit/orcos-soldier");
var orcos_wizard_1 = require("./unit/orcos-wizard");
var OrcosFactory = /** @class */ (function () {
    function OrcosFactory() {
        console.log("Unidad de orcos");
    }
    OrcosFactory.prototype.createArcher = function () {
        return new orcos_archer_1.OrcosArcher();
    };
    OrcosFactory.prototype.createSoldier = function () {
        return new orcos_soldier_1.OrcosSoldier();
    };
    OrcosFactory.prototype.createWizard = function () {
        return new orcos_wizard_1.OrcosWizard();
    };
    return OrcosFactory;
}());
exports.OrcosFactory = OrcosFactory;
