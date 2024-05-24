"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosWizard = void 0;
var elfos_magic_weapon_1 = require("../weapon/elfos-magic-weapon");
var ElfosWizard = /** @class */ (function () {
    function ElfosWizard() {
        this.health = 230;
        this.damage = 25;
        this.speed = 4;
    }
    ElfosWizard.prototype.getWeapon = function () {
        return new elfos_magic_weapon_1.ElfosMagicWeapon();
    };
    ElfosWizard.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    ElfosWizard.prototype.move = function () {
        console.log('El mago elfo camina en el agua');
    };
    return ElfosWizard;
}());
exports.ElfosWizard = ElfosWizard;
