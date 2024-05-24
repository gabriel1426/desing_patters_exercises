"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreFactory = void 0;
var StoreFactory = /** @class */ (function () {
    function StoreFactory() {
    }
    StoreFactory.prototype.showName = function () {
        var producto = this.createProduct();
        producto.getName();
    };
    return StoreFactory;
}());
exports.StoreFactory = StoreFactory;
