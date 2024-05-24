"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosLargeDistanceWeapon = void 0;
var ElfosLargeDistanceWeapon = /** @class */ (function () {
    function ElfosLargeDistanceWeapon() {
        this.name = "Arco";
        this.damage = 10;
    }
    ElfosLargeDistanceWeapon.prototype.use = function (damage) {
        console.log("Ataque usando un ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return ElfosLargeDistanceWeapon;
}());
exports.ElfosLargeDistanceWeapon = ElfosLargeDistanceWeapon;
