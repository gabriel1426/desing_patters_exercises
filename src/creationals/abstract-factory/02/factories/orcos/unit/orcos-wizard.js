"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosWizard = void 0;
var orcos_magic_weapon_1 = require("../weapon/orcos-magic-weapon");
var OrcosWizard = /** @class */ (function () {
    function OrcosWizard() {
        this.health = 50;
        this.damage = 20;
        this.speed = 4;
    }
    OrcosWizard.prototype.getWeapon = function () {
        return new orcos_magic_weapon_1.OrcosMagicWeapon();
    };
    OrcosWizard.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    OrcosWizard.prototype.move = function () {
        console.log('El mago orco se teletransporta');
    };
    return OrcosWizard;
}());
exports.OrcosWizard = OrcosWizard;
