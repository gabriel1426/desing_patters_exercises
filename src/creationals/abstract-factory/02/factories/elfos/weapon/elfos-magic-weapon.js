"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfosMagicWeapon = void 0;
var ElfosMagicWeapon = /** @class */ (function () {
    function ElfosMagicWeapon() {
        this.name = "Hechizo de naturaleza";
        this.damage = 21;
    }
    ElfosMagicWeapon.prototype.use = function (damage) {
        console.log("Ataque usando un ".concat(this.name, " e hizo un da\u00F1o total de ").concat(this.damage + damage));
    };
    return ElfosMagicWeapon;
}());
exports.ElfosMagicWeapon = ElfosMagicWeapon;
