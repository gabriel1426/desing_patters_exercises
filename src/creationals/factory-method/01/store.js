"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.prototype.createNewProduct = function (factory) {
        factory.showName();
    };
    return Store;
}());
exports.Store = Store;
