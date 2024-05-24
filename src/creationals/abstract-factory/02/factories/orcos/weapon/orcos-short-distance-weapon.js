"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosShortDistanceWeapon = void 0;
var OrcosShortDistanceWeapon = /** @class */ (function () {
    function OrcosShortDistanceWeapon() {
        this.name = "Hacha";
        this.damage = 8;
    }
    OrcosShortDistanceWeapon.prototype.use = function (damage) {
        console.log("Ataque usando una ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return OrcosShortDistanceWeapon;
}());
exports.OrcosShortDistanceWeapon = OrcosShortDistanceWeapon;
