"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SofaBuilder = void 0;
var sofa_1 = require("../products/sofa");
var SofaBuilder = /** @class */ (function () {
    function SofaBuilder() {
        this.reset();
    }
    SofaBuilder.prototype.reset = function () {
        this.sofa = new sofa_1.Sofa();
    };
    SofaBuilder.prototype.setSize = function (size) {
        this.sofa.size = size;
    };
    SofaBuilder.prototype.setColor = function (color) {
        this.sofa.color = color;
    };
    SofaBuilder.prototype.setMaterial = function (material) {
        this.sofa.material = material;
    };
    SofaBuilder.prototype.setCushions = function (numCushions) {
        this.sofa.cushions = numCushions;
    };
    SofaBuilder.prototype.addRecliner = function () {
        this.sofa.recliner = true;
    };
    SofaBuilder.prototype.getFurniture = function () {
        var sofa = this.sofa;
        this.reset();
        return sofa;
    };
    return SofaBuilder;
}());
exports.SofaBuilder = SofaBuilder;
