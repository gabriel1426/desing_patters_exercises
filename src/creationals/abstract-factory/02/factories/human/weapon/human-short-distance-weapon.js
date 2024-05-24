"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanShortDistanceWeapon = void 0;
var HumanShortDistanceWeapon = /** @class */ (function () {
    function HumanShortDistanceWeapon() {
        this.name = "Espada";
        this.damage = 17;
    }
    HumanShortDistanceWeapon.prototype.use = function (damage) {
        console.log("Ataque usando una ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return HumanShortDistanceWeapon;
}());
exports.HumanShortDistanceWeapon = HumanShortDistanceWeapon;
