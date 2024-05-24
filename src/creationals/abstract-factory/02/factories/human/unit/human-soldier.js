"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanSoldier = void 0;
var human_short_distance_weapon_1 = require("../weapon/human-short-distance-weapon");
var HumanSoldier = /** @class */ (function () {
    function HumanSoldier() {
        this.health = 130;
        this.damage = 18;
        this.speed = 8;
    }
    HumanSoldier.prototype.getWeapon = function () {
        return new human_short_distance_weapon_1.HumanShortDistanceWeapon();
    };
    HumanSoldier.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    HumanSoldier.prototype.move = function () {
        console.log('El soldado humano se mueve hacia a delante');
    };
    return HumanSoldier;
}());
exports.HumanSoldier = HumanSoldier;
