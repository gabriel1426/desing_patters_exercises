"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrazosBuilder = void 0;
var brazos_1 = require("../product/brazos");
var BrazosBuilder = /** @class */ (function () {
    function BrazosBuilder() {
        this.brazos = new brazos_1.Brazos();
        this.reset();
    }
    BrazosBuilder.prototype.reset = function () {
        this.brazos = new brazos_1.Brazos();
        return this;
    };
    BrazosBuilder.prototype.withMaterial = function (material) {
        this.brazos.material = material;
        return this;
    };
    BrazosBuilder.prototype.withTamaño = function (tamaño) {
        this.brazos.tamaño = tamaño;
        return this;
    };
    BrazosBuilder.prototype.withColor = function (color) {
        this.brazos.color = color;
        return this;
    };
    BrazosBuilder.prototype.withDedos = function (dedos) {
        this.brazos.dedos = dedos;
        return this;
    };
    BrazosBuilder.prototype.build = function () {
        var brazos = this.brazos;
        this.reset();
        return brazos;
    };
    return BrazosBuilder;
}());
exports.BrazosBuilder = BrazosBuilder;
