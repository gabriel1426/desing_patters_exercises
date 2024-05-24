"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosArcher = void 0;
var elfos_large_distance_weapon_1 = require("../weapon/elfos-large-distance-weapon");
var ElfosArcher = /** @class */ (function () {
    function ElfosArcher() {
        this.health = 200;
        this.damage = 11;
        this.speed = 6;
    }
    ElfosArcher.prototype.getWeapon = function () {
        return new elfos_large_distance_weapon_1.ElfosLargeDistanceWeapon();
    };
    ElfosArcher.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    ElfosArcher.prototype.move = function () {
        console.log('El arquero elfo se silenciosamente');
    };
    return ElfosArcher;
}());
exports.ElfosArcher = ElfosArcher;
