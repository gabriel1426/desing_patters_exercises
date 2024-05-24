"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcosMagicWeapon = void 0;
var OrcosMagicWeapon = /** @class */ (function () {
    function OrcosMagicWeapon() {
        this.name = "Hechizo de oscuridad";
        this.damage = 17;
    }
    OrcosMagicWeapon.prototype.use = function (damage) {
        console.log("Ataque usando un ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return OrcosMagicWeapon;
}());
exports.OrcosMagicWeapon = OrcosMagicWeapon;
