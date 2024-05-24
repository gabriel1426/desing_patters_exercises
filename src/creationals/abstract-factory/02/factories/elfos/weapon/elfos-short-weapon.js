"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosShortWeapon = void 0;
var ElfosShortWeapon = /** @class */ (function () {
    function ElfosShortWeapon() {
        this.name = "Dagas";
        this.damage = 12;
    }
    ElfosShortWeapon.prototype.use = function (damage) {
        console.log("Ataque usando una ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return ElfosShortWeapon;
}());
exports.ElfosShortWeapon = ElfosShortWeapon;
