"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicsFactory = void 0;
var store_factory_1 = require("./store-factory");
var electronic_1 = require("../products/electronic");
var ElectronicsFactory = /** @class */ (function (_super) {
    __extends(ElectronicsFactory, _super);
    function ElectronicsFactory(name, price, stock, brand) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.price = price;
        _this.stock = stock;
        _this.brand = brand;
        return _this;
    }
    ElectronicsFactory.prototype.createProduct = function () {
        return new electronic_1.Electronic(this.name, this.price, this.stock, this.brand);
    };
    return ElectronicsFactory;
}(store_factory_1.StoreFactory));
exports.ElectronicsFactory = ElectronicsFactory;
