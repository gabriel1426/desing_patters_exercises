"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosLargeDistanceWeapon = void 0;
var OrcosLargeDistanceWeapon = /** @class */ (function () {
    function OrcosLargeDistanceWeapon() {
        this.name = "Ballesta";
        this.damage = 13;
    }
    OrcosLargeDistanceWeapon.prototype.use = function (damage) {
        console.log("Ataque usando un ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return OrcosLargeDistanceWeapon;
}());
exports.OrcosLargeDistanceWeapon = OrcosLargeDistanceWeapon;
