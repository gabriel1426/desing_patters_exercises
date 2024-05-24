"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanWizard = void 0;
var human_magic_weapon_1 = require("../weapon/human-magic-weapon");
var HumanWizard = /** @class */ (function () {
    function HumanWizard() {
        this.health = 150;
        this.damage = 26;
        this.speed = 3;
    }
    HumanWizard.prototype.getWeapon = function () {
        return new human_magic_weapon_1.HumanMagicWeapon();
    };
    HumanWizard.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    HumanWizard.prototype.move = function () {
        console.log('El mago humano flota en el aire');
    };
    return HumanWizard;
}());
exports.HumanWizard = HumanWizard;
