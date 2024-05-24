"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosArcher = void 0;
var orcos_large_distance_weapon_1 = require("../weapon/orcos-large-distance-weapon");
var OrcosArcher = /** @class */ (function () {
    function OrcosArcher() {
        this.health = 100;
        this.damage = 18;
        this.speed = 3;
    }
    OrcosArcher.prototype.getWeapon = function () {
        return new orcos_large_distance_weapon_1.OrcosLargeDistanceWeapon();
    };
    OrcosArcher.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    OrcosArcher.prototype.move = function () {
        console.log('El arquero orco corre rápidamente');
    };
    return OrcosArcher;
}());
exports.OrcosArcher = OrcosArcher;
