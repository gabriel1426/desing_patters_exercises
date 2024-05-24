"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanLargeDistanceWeapon = void 0;
var HumanLargeDistanceWeapon = /** @class */ (function () {
    function HumanLargeDistanceWeapon() {
        this.name = "Lanza";
        this.damage = 15;
    }
    HumanLargeDistanceWeapon.prototype.use = function (damage) {
        console.log("Ataque usando una ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return HumanLargeDistanceWeapon;
}());
exports.HumanLargeDistanceWeapon = HumanLargeDistanceWeapon;
