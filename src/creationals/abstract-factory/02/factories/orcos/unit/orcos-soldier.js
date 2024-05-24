"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosSoldier = void 0;
var orcos_short_distance_weapon_1 = require("../weapon/orcos-short-distance-weapon");
var OrcosSoldier = /** @class */ (function () {
    function OrcosSoldier() {
        this.health = 100;
        this.damage = 10;
        this.speed = 5;
    }
    OrcosSoldier.prototype.getWeapon = function () {
        return new orcos_short_distance_weapon_1.OrcosShortDistanceWeapon();
    };
    OrcosSoldier.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    OrcosSoldier.prototype.move = function () {
        console.log('El soldado orco se mueve estruendosamente');
    };
    return OrcosSoldier;
}());
exports.OrcosSoldier = OrcosSoldier;
