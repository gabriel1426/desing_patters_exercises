"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosSoldier = void 0;
var elfos_short_weapon_1 = require("../weapon/elfos-short-weapon");
var ElfosSoldier = /** @class */ (function () {
    function ElfosSoldier() {
        this.health = 150;
        this.damage = 9;
        this.speed = 6;
    }
    ElfosSoldier.prototype.getWeapon = function () {
        return new elfos_short_weapon_1.ElfosShortWeapon();
    };
    ElfosSoldier.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    ElfosSoldier.prototype.move = function () {
        console.log('El soldado elfo se mueve entra los arboles');
    };
    return ElfosSoldier;
}());
exports.ElfosSoldier = ElfosSoldier;
