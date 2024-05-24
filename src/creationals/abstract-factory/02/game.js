"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.createUnit = function (unit) {
        this.arquero = unit.createArcher();
        this.soldado = unit.createSoldier();
        this.mago = unit.createWizard();
    };
    Game.prototype.equiparUnidad = function () {
        this.armaArquero = this.arquero.getWeapon();
        this.armaSoldado = this.soldado.getWeapon();
        this.armaMago = this.mago.getWeapon();
    };
    Game.prototype.atacar = function () {
        this.arquero.attack(this.armaArquero);
        this.soldado.attack(this.armaSoldado);
        this.mago.attack(this.armaMago);
    };
    return Game;
}());
exports.Game = Game;
