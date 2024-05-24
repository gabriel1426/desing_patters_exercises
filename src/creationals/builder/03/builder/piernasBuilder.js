"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiernasBuilder = void 0;
var piernas_1 = require("../product/piernas");
var PiernasBuilder = /** @class */ (function () {
    function PiernasBuilder() {
        this.piernas = new piernas_1.Piernas();
        this.reset();
    }
    PiernasBuilder.prototype.reset = function () {
        this.piernas = new piernas_1.Piernas();
        return this;
    };
    PiernasBuilder.prototype.withMaterial = function (material) {
        this.piernas.material = material;
        return this;
    };
    PiernasBuilder.prototype.withTamaño = function (tamaño) {
        this.piernas.tamaño = tamaño;
        return this;
    };
    PiernasBuilder.prototype.withColor = function (color) {
        this.piernas.color = color;
        return this;
    };
    PiernasBuilder.prototype.withDedos = function (dedos) {
        this.piernas.dedos = dedos;
        return this;
    };
    PiernasBuilder.prototype.build = function () {
        var piernas = this.piernas;
        this.reset();
        return piernas;
    };
    return PiernasBuilder;
}());
exports.PiernasBuilder = PiernasBuilder;
