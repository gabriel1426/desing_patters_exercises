"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonBuilder = void 0;
var person_1 = require("../products/person");
var PersonBuilder = /** @class */ (function () {
    function PersonBuilder() {
        this.person = new person_1.Person();
        this.reset();
    }
    PersonBuilder.prototype.reset = function () {
        this.person = new person_1.Person();
        return this;
    };
    PersonBuilder.prototype.setName = function (name) {
        this.person.name = name;
    };
    PersonBuilder.prototype.setLastName = function (lastName) {
        this.person.lastName = lastName;
    };
    PersonBuilder.prototype.setAge = function (age) {
        this.person.age = age;
    };
    PersonBuilder.prototype.setCountry = function (country) {
        this.person.country = country;
    };
    PersonBuilder.prototype.setCity = function (city) {
        this.person.city = city;
    };
    PersonBuilder.prototype.getResult = function () {
        var person = this.person;
        this.reset();
        return person;
    };
    return PersonBuilder;
}());
exports.PersonBuilder = PersonBuilder;
