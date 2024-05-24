"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanMagicWeapon = void 0;
var HumanMagicWeapon = /** @class */ (function () {
    function HumanMagicWeapon() {
        this.name = "Hechizo de fuego";
        this.damage = 30;
    }
    HumanMagicWeapon.prototype.use = function (damage) {
        console.log("Ataque usando un ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return HumanMagicWeapon;
}());
exports.HumanMagicWeapon = HumanMagicWeapon;
