"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalBuilder = void 0;
var animal_1 = require("../products/animal");
var AnimalBuilder = /** @class */ (function () {
    function AnimalBuilder() {
        this.reset();
    }
    AnimalBuilder.prototype.reset = function () {
        this.animal = new animal_1.Animal();
    };
    AnimalBuilder.prototype.setName = function (name) {
        this.animal.name = name;
    };
    AnimalBuilder.prototype.setAge = function (age) {
        this.animal.age = age;
    };
    AnimalBuilder.prototype.setCountry = function (country) {
        this.animal.country = country;
    };
    AnimalBuilder.prototype.getResult = function () {
        var animal = this.animal;
        this.reset();
        return animal;
    };
    return AnimalBuilder;
}());
exports.AnimalBuilder = AnimalBuilder;
