"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanFactory = void 0;
var human_soldier_1 = require("./unit/human-soldier");
var human_archer_1 = require("./unit/human-archer");
var human_wizard_1 = require("./unit/human-wizard");
var HumanFactory = /** @class */ (function () {
    function HumanFactory() {
        console.log("Unidad de Humanos");
    }
    HumanFactory.prototype.createArcher = function () {
        return new human_archer_1.HumanArcher();
    };
    HumanFactory.prototype.createSoldier = function () {
        return new human_soldier_1.HumanSoldier();
    };
    HumanFactory.prototype.createWizard = function () {
        return new human_wizard_1.HumanWizard();
    };
    return HumanFactory;
}());
exports.HumanFactory = HumanFactory;
