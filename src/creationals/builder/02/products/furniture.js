"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furniture = void 0;
var Furniture = /** @class */ (function () {
    function Furniture() {
    }
    Furniture.prototype.getMaterial = function () {
        return this.material;
    };
    Furniture.prototype.getSize = function () {
        return this.size;
    };
    Furniture.prototype.getColor = function () {
        return this.color;
    };
    return Furniture;
}());
exports.Furniture = Furniture;
