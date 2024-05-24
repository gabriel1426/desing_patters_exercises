"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanArcher = void 0;
var human_large_distance_weapon_1 = require("../weapon/human-large-distance-weapon");
var HumanArcher = /** @class */ (function () {
    function HumanArcher() {
        this.health = 100;
        this.damage = 15;
        this.speed = 6;
    }
    HumanArcher.prototype.getWeapon = function () {
        return new human_large_distance_weapon_1.HumanLargeDistanceWeapon();
    };
    HumanArcher.prototype.attack = function (weapon) {
        weapon.use(this.damage);
    };
    HumanArcher.prototype.move = function () {
        console.log('El arquero humano se sigilosamente');
    };
    return HumanArcher;
}());
exports.HumanArcher = HumanArcher;
