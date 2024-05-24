"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorsoBuilder = void 0;
var torso_1 = require("../product/torso");
var TorsoBuilder = /** @class */ (function () {
    function TorsoBuilder() {
        this.torso = new torso_1.Torso();
        this.reset();
    }
    TorsoBuilder.prototype.reset = function () {
        this.torso = new torso_1.Torso();
        return this;
    };
    TorsoBuilder.prototype.withMaterial = function (material) {
        this.torso.material = material;
        return this;
    };
    TorsoBuilder.prototype.withTamaño = function (tamaño) {
        this.torso.tamaño = tamaño;
        return this;
    };
    TorsoBuilder.prototype.withColor = function (color) {
        this.torso.color = color;
        return this;
    };
    TorsoBuilder.prototype.withForma = function (forma) {
        this.torso.forma = forma;
        return this;
    };
    TorsoBuilder.prototype.build = function () {
        var torso = this.torso;
        this.reset();
        return torso;
    };
    return TorsoBuilder;
}());
exports.TorsoBuilder = TorsoBuilder;
