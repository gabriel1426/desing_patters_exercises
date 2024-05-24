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
exports.HomeFactory = void 0;
var store_factory_1 = require("./store-factory");
var home_1 = require("../products/home");
var HomeFactory = /** @class */ (function (_super) {
    __extends(HomeFactory, _super);
    function HomeFactory(name, price, stock, type) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.price = price;
        _this.stock = stock;
        _this.type = type;
        return _this;
    }
    HomeFactory.prototype.createProduct = function () {
        return new home_1.Home(this.name, this.price, this.stock, this.type);
    };
    return HomeFactory;
}(store_factory_1.StoreFactory));
exports.HomeFactory = HomeFactory;
