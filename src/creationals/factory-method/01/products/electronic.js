"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electronic = void 0;
var Electronic = /** @class */ (function () {
    function Electronic(name, price, stock, brand) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.brand = brand;
    }
    Electronic.prototype.getName = function () {
        console.log("Soy una ".concat(this.name));
    };
    return Electronic;
}());
exports.Electronic = Electronic;
