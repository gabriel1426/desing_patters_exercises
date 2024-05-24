"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getData = function () {
        console.log("".concat(this.name, " - ").concat(this.lastName, " - ").concat(this.age, " - ").concat(this.country, " - ").concat(this.city));
    };
    return Person;
}());
exports.Person = Person;
