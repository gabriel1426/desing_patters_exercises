"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var Home = /** @class */ (function () {
    function Home(name, price, stock, type) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.type = type;
    }
    Home.prototype.getName = function () {
        console.log("Soy un ".concat(this.name));
    };
    return Home;
}());
exports.Home = Home;
