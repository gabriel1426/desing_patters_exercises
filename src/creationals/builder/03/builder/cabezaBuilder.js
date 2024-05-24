"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabezaBuilder = void 0;
var cabeza_1 = require("../product/cabeza");
var CabezaBuilder = /** @class */ (function () {
    function CabezaBuilder() {
        this.cabeza = new cabeza_1.Cabeza();
        this.reset();
    }
    CabezaBuilder.prototype.reset = function () {
        this.cabeza = new cabeza_1.Cabeza();
        return this;
    };
    CabezaBuilder.prototype.withForma = function (forma) {
        this.cabeza.forma = forma;
        return this;
    };
    CabezaBuilder.prototype.withMaterial = function (material) {
        this.cabeza.material = material;
        return this;
    };
    CabezaBuilder.prototype.withTamaño = function (tamaño) {
        this.cabeza.tamaño = tamaño;
        return this;
    };
    CabezaBuilder.prototype.withColor = function (color) {
        this.cabeza.color = color;
        return this;
    };
    CabezaBuilder.prototype.withOjos = function (ojos) {
        this.cabeza.ojos = ojos;
        return this;
    };
    CabezaBuilder.prototype.withBoca = function (boca) {
        this.cabeza.boca = boca;
        return this;
    };
    CabezaBuilder.prototype.withNariz = function (nariz) {
        this.cabeza.nariz = nariz;
        return this;
    };
    CabezaBuilder.prototype.build = function () {
        var cabeza = this.cabeza;
        this.reset();
        return cabeza;
    };
    return CabezaBuilder;
}());
exports.CabezaBuilder = CabezaBuilder;
