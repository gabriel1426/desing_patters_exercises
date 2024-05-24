"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
var person_builder_1 = require("../contructores/person-builder");
var animal_builder_1 = require("../contructores/animal-builder");
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.cretePerson = function (_a) {
        var nombre = _a.nombre, edad = _a.edad, pais = _a.pais, apellido = _a.apellido, ciudad = _a.ciudad;
        var person = new person_builder_1.PersonBuilder();
        person.setName(nombre);
        person.setAge(edad);
        person.setCountry(pais);
        person.setLastName(apellido);
        person.setCity(ciudad);
        return person.getResult();
    };
    Director.prototype.createAnimal = function () {
        var animal = new animal_builder_1.AnimalBuilder();
        animal.setName('Muñeca');
        animal.setCountry('colombia');
        animal.setAge(5);
        return animal.getResult();
    };
    return Director;
}());
exports.Director = Director;
